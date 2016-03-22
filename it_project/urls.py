from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'it_project.views.home', name='home'),
    url(r'^Info/$', 'it_project.views.Info', name='Info'),
	url(r'^about/$', 'it_project.views.about', name='about'),
	url(r'^login/$', 'it_project.views.user_login', name='login'),
	url(r'^register/$', 'it_project.views.register', name='register'),
	url(r'^game/$', include('game.urls')),
    url(r'^rank/$', 'it_project.views.rank', name='rank'),
	url(r'^rules/$', 'it_project.views.rules', name='rules'),
    url(r'^admin/', include(admin.site.urls)),
	url(r'^profile/$', 'it_project.views.profile', name='profile')
   
)
