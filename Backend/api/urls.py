from django.urls import path
from .views import BookingList, BookingDetail , admin_dashboard , admin_logout , admin_login
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView)

urlpatterns = [
    # Bookings Path
    path('bookings/', BookingList.as_view(), name='booking-list'),
    path('bookings/<int:pk>/', BookingDetail.as_view(), name='booking-detail'),

    # JWT Token Path 
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    
    # admin dashboard path 
    path("admin-login/", admin_login, name="admin-login"),
    path("admin-dashboard/", admin_dashboard, name="admin-dashboard"),
    path("admin-logout/", admin_logout, name="admin-logout"),
]