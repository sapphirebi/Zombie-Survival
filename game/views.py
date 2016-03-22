from django.shortcuts import render
from django.http import HttpResponse
from game.models import Mark, Status
from django.contrib.auth.models import User


def game(request):
    try:
        user_name = request.user.username
        user = User.objects.get(username=user_name)
        context_dict = {}
        status = Status.objects.get(user=user)
        context_dict['status'] = status
        if request.method == 'POST':

            food=request.POST.get('food')
            people=request.POST.get('people')
            survival=request.POST.get('survival')
            health=request.POST.get('health')
            user=request.user
            status = Status.objects.get(user=user)
            status.food=food
            status.people=people
            status.survival=survival
            status.health=health
            status.save()
            context_dict['status'] = status

        return render(request, 'game/game.html', context_dict )
    except (User.DoesNotExist, Status.DoesNotExist):
        return render(request, 'game/login.html' )


def save(request):

    return render(request, 'game/save.html' )



