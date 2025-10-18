from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'), #fetching home func
    path('about/', views.about, name='about'), #fetching about func
    path('projects/', views.projects, name='projects'), #fetching projects func
    path('skills/', views.skills, name='skills'),
    path('contact/', views.contact, name='contact'), #fetching contact func
]
