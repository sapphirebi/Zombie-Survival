
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import HttpResponse, HttpResponseRedirect
from game.forms import UserForm
from game.models import Mark, Status
from django.contrib.auth.models import User
from django.contrib.auth import logout


def home(request):
    return render(request, 'game/home.html')
def Info(request):
    return render(request, 'game/gameInf.html')
def about(request):
    return render(request, 'game/team.html')

def user_login(request):

    # If the request is a HTTP POST, try to pull out the relevant information.
    if request.method == 'POST':
        # Gather the username and password provided by the user.
        # This information is obtained from the login form.
                # We use request.POST.get('<variable>') as opposed to request.POST['<variable>'],
                # because the request.POST.get('<variable>') returns None, if the value does not exist,
                # while the request.POST['<variable>'] will raise key error exception
        username = request.POST.get('username')
        password = request.POST.get('password')

        # Use Django's machinery to attempt to see if the username/password
        # combination is valid - a User object is returned if it is.
        user = authenticate(username=username, password=password)

        # If we have a User object, the details are correct.
        # If None (Python's way of representing the absence of a value), no user
        # with matching credentials was found.
        if user:
            # Is the account active? It could have been disabled.
            if user.is_active and not user.is_superuser:
                # If the account is valid and active, we can log the user in.
                # We'll send the user back to the homepage.
                login(request, user)
                return HttpResponseRedirect('/game/')
            else:
                # An inactive account was used - no logging in!
                return HttpResponse("Your account is disabled.")
        else:
            # Bad login details were provided. So we can't log the user in.
            print "Invalid login details: {0}, {1}".format(username, password)
            return HttpResponse("Invalid login details supplied.")

    # The request is not a HTTP POST, so display the login form.
    # This scenario would most likely be a HTTP GET.
    else:
        # No context variables to pass to the template system, hence the
        # blank dictionary object...
        return render(request, 'game/login.html', {})

	    
# def register(request):
#     # If the request is a HTTP POST, try to pull out the relevant information.
#     if request.method == 'POST':
# 
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         email = request.POST.get('email')
#         try:
#             user = User.objects.get(username=username)
#             return HttpResponse("Invalid username!!")
#         except User.DoesNotExist:
#             if password != "" and email != "":
#                 u = User.objects.get_or_create(username=username, password=password, email=email)
#                 u.set_password(u.password)
#                 u.save()
#                 return render(request, 'game/login.html')
#             else:
#                 return HttpResponse("Password not match or fields not filled!")
#     else:
#             return render(request, 'game/register.html' )
def register(request):
            registered = False

            # If it's a HTTP POST, we're interested in processing form data.
            if request.method == 'POST':
                user_form = UserForm(data=request.POST)
                # If the two forms are valid...
                if user_form.is_valid():
                    # Save the user's form data to the database.
                    confirm_password = request.POST.get('confirm_password')
                    password = request.POST.get('password')
                    user = user_form.save()
                    if confirm_password == password:
                        user.set_password(user.password)
                        user.save()
                        registered = True
                        s = Status.objects.get_or_create(user=user)[0]
                        s.save()
                        return render(request, 'game/login.html')
                    else:
                     return HttpResponse("Password not match!")
                else:
                    return HttpResponse("User already exist or invalid email!")
            # Not a HTTP POST, so we render our form using two ModelForm instances.
            # These forms will be blank, ready for user input.
            else:
                     if request.user.is_authenticated():
                           logout(request)
                           return render(request, 'game/home.html')
                     else:
                        user_form = UserForm()
                        return render(request,
                            'game/register.html',
                            {'user_form': user_form, 'registered': registered} )

def rank(request):
    context_dict = {}
    marks = Mark.objects.filter().order_by('-mark')
    marks = marks[0:5]
    foods = Status.objects.filter().order_by('-food')
    foods = foods[0:5]
    times = Status.objects.filter().order_by('-survival')
    times = times[0:5]
    people = Status.objects.filter().order_by('-people')
    people = people[0:5]
  
    context_dict['marks'] = marks
    context_dict['foods'] = foods
    context_dict['times'] = times
    context_dict['people'] = people
   
    return render(request, 'game/rank.html', context_dict)

def rules(request):
    return render(request, 'game/rule.html')
    
def profile(request):
        if request.method == 'POST':
        # Gather the username and password provided by the user.
        # This information is obtained from the login form.
                # We use request.POST.get('<variable>') as opposed to request.POST['<variable>'],
                # because the request.POST.get('<variable>') returns None, if the value does not exist,
                # while the request.POST['<variable>'] will raise key error exception
            email= request.POST.get('email')
            old_password= request.POST.get('old_password')
            password = request.POST.get('password')
            password2 = request.POST.get('password2')
            user=request.user
            if password == password2 and user.check_password(old_password):
                 user.email=email
                 user.set_password(password)
                 user.save()
                 return render(request, 'game/home.html')
            else:
                 return HttpResponse("Password not match or old password not correct!")

        else:
            return render(request, 'game/profile.html')



