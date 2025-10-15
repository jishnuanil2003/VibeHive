from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here
class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    location = models.CharField(max_length=100)
    check_in = models.DateField()
    check_out = models.DateField()
    people = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(9)])
    room_number = models.CharField(max_length=10, blank=True, null=True)
    is_approved = models.BooleanField(default=False)
    def clean(self):
        from django.core.exceptions import ValidationError
        if self.check_out and self.check_in and self.check_out <= self.check_in:
            raise ValidationError({'check_out': "Check-out date must be after check-in date."})

    def __str__(self):
        return self.name