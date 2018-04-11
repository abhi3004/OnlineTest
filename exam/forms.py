from django import forms
from django.forms import widgets
class RegistrationForm(forms.Form):
    name=forms.CharField(label='Name', max_length=200 ,widget=forms.TextInput(attrs={'class' : 'form-control form-inline'}))
    college_name=forms.CharField(max_length=200,widget=forms.TextInput(attrs={'class' : 'form-control form-control-sm'}))
    branch=forms.CharField(max_length=200,widget=forms.TextInput(attrs={'class' : 'form-control form-control-sm'}))
    roll_no=forms.CharField(max_length=200,widget=forms.TextInput(attrs={'class' : 'form-control form-control-sm'}))
    email=forms.EmailField(widget=forms.TextInput(attrs={'class' : 'form-control form-control-sm'}))
    mobile=forms.IntegerField(widget=forms.TextInput(attrs={'class' : 'form-control form-control-sm'}))
    expected_year_of_graduation=forms.IntegerField(widget=forms.TextInput(attrs={'class' : 'form-control form-control-sm'}))