from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    # This line is required. Links UserProfile to a User model instance.
    user = models.OneToOneField(User)

    # The additional attributes we wish to include.
    website = models.URLField(blank=True)
    picture = models.ImageField(upload_to='profile_images', blank=True)

    # Override the __unicode__() method to return out something meaningful!
    def __unicode__(self):
        return self.user.username

class Status(models.Model):
    user = models.ForeignKey(User)
    food = models.IntegerField(default=10)
    health = models.IntegerField(default=10)
    survival = models.IntegerField(default=0)
    people = models.IntegerField(default=1)

    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.user.username

class Mark(models.Model):
    user = models.ForeignKey(User)
    mark = models.IntegerField(default=0)

    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.user.username

