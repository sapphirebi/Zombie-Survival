import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'it_project.settings')

import django
django.setup()

from django.contrib.auth.models import User


def populate():
    add_user("leifos","leifos")
    add_user("laura","laura")
    add_user("david","david")

def add_user(username,password):
    p = User.objects.get_or_create(username=username, password=password)[0]
    p.save()
    return p


# Start execution here!
if __name__ == '__main__':
    print ("Starting user population script...")
    populate()
    print ('Completed user population script...')