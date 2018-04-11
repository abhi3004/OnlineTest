from django.shortcuts import render
from.forms import RegistrationForm

def index(request):
    form= RegistrationForm()
    context={
        "Loginform":form
    }