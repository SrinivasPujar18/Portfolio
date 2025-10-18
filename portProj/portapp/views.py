from django.shortcuts import render

# Create your views here.
def home(request): #fetching index.html
    return render(request, 'index.html')

def about(request): #fetching about.html
    return render(request, 'about.html')

def projects(request): #fetching projects.html
    return render(request, 'projects.html')

def skills(request): #fetching projects.html
    return render(request, 'skills.html')

def contact(request): #fetching contact.html
    return render(request, 'contact.html')
