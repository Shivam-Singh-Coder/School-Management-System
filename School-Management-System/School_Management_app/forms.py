from django import forms
from django.forms import TextInput,ModelForm
from .models import user

class StudentForm(forms.Form):
    class Meta:
        model = user
        fields = [ 'name' , 'phone' ]
        name = forms.CharField(widget=TextInput(attrs={"placeholder":"Name"}))
        Widget = {
            'name': TextInput(attrs={
                'class': "form-control",
                'style': 'max-width: 300px;',
                'placeholder': 'Name'
                }),
            'phone' : TextInput(attrs={
                'class': "form-control",
                'style': 'max-width: 300px;',
                'placeholder' : 'Phone No.'
            })
        }