from django.shortcuts import render
from.forms import RegistrationForm

def index(request):
    form= RegistrationForm()
    context={
        "studentregistrationform":form
    }
    return render(request,"exam/index.html",context)
def overview(request):
    return render(request,"exam/overview.html")
def section(request):
    return render(request,"exam/section-overview.html")
def sectiontest(request):
    return render(request,"exam/section-test.html")