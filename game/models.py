from django.db import models
from django.contrib.auth.models import User

class Status(models.Model):
    user = models.ForeignKey(User)
    food = models.IntegerField(default=15)
    health = models.IntegerField(default=100)
    survival = models.IntegerField(default=0)
    people = models.IntegerField(default=0)
    energy = models.IntegerField(default=100)
    attack = models.FloatField(default=6)
    zombie_attack = models.IntegerField(default=3)
    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.user.username

class Mark(models.Model):
    user = models.ForeignKey(User)
    mark = models.IntegerField(default=0)

    def __unicode__(self):      #For Python 2, use __str__ on Python 3
        return self.user.username


