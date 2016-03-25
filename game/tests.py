from django.test import TestCase
from game.models import Mark, Status
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.core.urlresolvers import resolve
from django.test import Client
from game.views import game
from it_project.views import home, user_login, register, rank, rules,profile,about,Info

class UrlTests(TestCase):
    def test_game_view(self):
        found = resolve('/game/')
        self.assertEqual(found.func, game)

    def test_login_view(self):
        found = resolve('/login/')
        self.assertEqual(found.func, user_login)

    def test_register_view(self):
        found = resolve('/register/')
        self.assertEqual(found.func, register)

    def test_home_view(self):
        found = resolve('/Info/')
        self.assertEqual(found.func, Info)

    def test_rank_view(self):
        found = resolve('/rank/')
        self.assertEqual(found.func, rank)

    def test_rule_view(self):
        found = resolve('/rules/')
        self.assertEqual(found.func, rules)

    def test_about_view(self):
        found = resolve('/about/')
        self.assertEqual(found.func, about)

class ModelTests(TestCase):


    def test_user_model(self):

                user = User(username='book',password="pass")
                user.save()

                user2 = User(username='bookff',password="p", email="aaa")
                user2.save()

                self.assertEqual((user.username == "book"), True)
                self.assertEqual((user.password == "pass"), True)
                self.assertEqual((user2.email == "aaa"), True)

    def test_mark_model(self):

                user = User(username='book', password="pass")
                user.save()
                mark = Mark(user=user)
                mark.save()

                mark2 = Mark(user=user, mark=1)
                mark2.save()
                self.assertEqual((mark.user == user), True)
                #Check the mark is 0 if no value specified
                self.assertEqual((mark.mark == 0), True)
                self.assertEqual((mark2.mark == 1), True)

    def test_status_model(self):

                user = User(username='book', password="pass")
                user.save()
                status = Status(user=user)
                status.save()
                self.assertEqual((status.user == user), True)

                #Check the value is default if no value specified
                self.assertEqual((status.food == 15), True)
                self.assertEqual((status.energy == 100), True)
                self.assertEqual((status.health == 100), True)
                self.assertEqual((status.survival == 0), True)
                self.assertEqual((status.people == 0), True)
                self.assertEqual((status.attack == 6), True)
                self.assertEqual((status.zombie_attack == 3), True)


                status2 = Status(user=user, food=1)
                status2.save()
                self.assertEqual((status2.food == 1), True)

class viewTests(TestCase):

    def test_view_home(self):

            response = self.client.get(reverse('home'))
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Register")
            self.assertContains(response, "Login")
            username = response.context['user'].username
            self.assertEqual((username == ''), True)


    def test_view_rank_before_populate(self):

                response = self.client.get(reverse('rank'))
                self.assertEqual(response.status_code, 200)
                #Check if the key Text 'Score' is there
                self.assertContains(response, "Score")
                #Check if there is no mark
                num_marks =len(response.context['marks'])
                self.assertEqual(num_marks , 0)

    def test_view_rank_after_populate(self):
                #populate data
                user = User(username='book', password="pass")
                user.save()
                mark = Mark(user=user)
                mark.save()

                mark2 = Mark(user=user, mark=1)
                mark2.save()

                response = self.client.get(reverse('rank'))
                self.assertEqual(response.status_code, 200)

                #Check if the username 'book' is rendered
                self.assertContains(response, "book")
                #Check if there are two marks
                num_marks =len(response.context['marks'])
                self.assertEqual(num_marks , 2)