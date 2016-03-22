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

            check=request.POST.get('check')
            food=request.POST.get('food')
            people=request.POST.get('people')
            survival=request.POST.get('survival')
            energy=request.POST.get('energy')
            health=request.POST.get('health')
            attack=request.POST.get('attack')
            zombie_attack=request.POST.get('zombie_attack')
            user = request.user
            status = Status.objects.get(user=user)
            if check == "save":
                status.food = food
                status.people = people
                status.survival = survival
                status.health = health
                status.energy = energy
                status.attack = attack
                status.zombie_attack = zombie_attack
                status.save()
                context_dict['status'] = status

            else:
                final_mark = int(survival.encode('ascii'))*100+int(health.encode('ascii'))*2\
                             + int(food.encode('ascii'))*5-int(people.encode('ascii'))*10
                m = Mark.objects.create(user=user, mark=final_mark)
                status.delete()
                s = Status.objects.get_or_create(user=user)[0]
                s.save()
                context_dict['status'] = s

        return render(request, 'game/game.html', context_dict )
    except (User.DoesNotExist, Status.DoesNotExist):
        return render(request, 'game/login.html' )





