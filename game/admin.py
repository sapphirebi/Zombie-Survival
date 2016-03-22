from django.contrib import admin
from game.models import Status
from game.models import Mark
from django.contrib.auth.models import User

admin.site.register(Status)
admin.site.register(Mark)