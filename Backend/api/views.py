from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.core.mail import send_mail
from .models import Booking
from .serializers import BookingSerializer

# ============================================================
# 📦 1. BOOKING API (Public)
# ============================================================

class BookingList(APIView):
    # GET all bookings
    def get(self, request):
        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

    # POST new booking
    def post(self, request):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookingDetail(APIView):
    # Helper method to get booking by ID
    def get_object(self, pk):
        try:
            return Booking.objects.get(pk=pk)
        except Booking.DoesNotExist:
            return None

    # GET single booking
    def get(self, request, pk):
        booking = self.get_object(pk)
        if not booking:
            return Response({'error': 'Booking not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = BookingSerializer(booking)
        return Response(serializer.data)

    # PUT update booking
    def put(self, request, pk):
        booking = self.get_object(pk)
        if not booking:
            return Response({'error': 'Booking not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = BookingSerializer(booking, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # DELETE booking
    def delete(self, request, pk):
        booking = self.get_object(pk)
        if not booking:
            return Response({'error': 'Booking not found'}, status=status.HTTP_404_NOT_FOUND)
        booking.delete()
        return Response({'message': 'Booking deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

# ============================================================
# 🔐 2. ADMIN LOGIN / DASHBOARD / LOGOUT (Session-based)
# ============================================================

# ---- LOGIN ----
def admin_login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        # Static credentials
        allowed_username = "admin"
        allowed_password = "admin@123"

        if username == allowed_username and password == allowed_password:
            request.session["is_admin_logged_in"] = True
            return redirect("admin-dashboard")
        else:
            return render(request,"login.html", {"error": "Invalid credentials"})

    return render(request, "login.html")


# ---- LOGOUT ----
def admin_logout(request):
    request.session.flush()
    return redirect("admin-login")


# ---- ADMIN DASHBOARD ----
@csrf_exempt
def admin_dashboard(request):
    # ✅ session-based authentication
    if not request.session.get("is_admin_logged_in"):
        return redirect("admin-login")

    if request.method == "POST":
        action = request.POST.get("action")
        booking_id = request.POST.get("booking_id")
        booking = Booking.objects.get(id=booking_id)

        # ✅ Approve Booking
        if action == "approve":
            booking.is_approved = True
            booking.room_number = request.POST.get("room_number")
            booking.save()

            # Send confirmation email
            subject = "VibeHive Booking Confirmation"
            message = (
                f"Thanks for choosing VibeHive, {booking.name}!\n\n"
                f"Your booking has been successfully confirmed.\n"
                f"Room Number: {booking.room_number}\n"
                f"Check-in Date: {booking.check_in}\n"
                f"Check-out Date: {booking.check_out}\n\n"
                f"When you arrive, please tell your email ID ({booking.email}) "
                f"to the reception for confirming your arrival.\n\n"
                f"Have a wonderful stay at VibeHive!"
            )

            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [booking.email],
                fail_silently=False,
            )

        # ✅ Delete Booking
        elif action == "delete":
            booking.delete()

        return redirect("admin-dashboard")

    # ✅ Display all bookings
    bookings = Booking.objects.all().order_by("id")
    return render(request, "bookings_admin.html", {"bookings": bookings})