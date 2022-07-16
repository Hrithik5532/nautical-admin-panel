
from django.shortcuts import render,redirect,  get_object_or_404
from django.contrib import messages
from django.urls import reverse_lazy, reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render,redirect,  get_object_or_404
import requests
import json

# Partition Of Form:
def pdf1_view(request,slug):
    res = requests.get(f"https://marine-form-backend.herokuapp.com/admin/form/{slug}")
    data = res.text

    parse_json=json.loads(data)
  

    return render(request,'amptc.html',{'parse_data':parse_json})

def pdf1_apmtc2_view(request,slug):
    res = requests.get(f"https://marine-form-backend.herokuapp.com/admin/form/{slug}")
    data = res.text

    parse_json=json.loads(data)
  

    return render(request,'amptc2.html',{'parse_data':parse_json})



def pdf2_view(request,slug):
    res = requests.get(f"https://marine-form-backend.herokuapp.com/admin/form/{slug}")
    data = res.text

    parse_json=json.loads(data)

    return render(request,"kotc_new.html",{'parse_data':parse_json})

def pdf3_view(request,slug):
    res = requests.get(f"https://marine-form-backend.herokuapp.com/admin/form/{slug}")
    data = res.text

    parse_json=json.loads(data)

    return render(request,"warmseas.html",{'parse_data':parse_json})

def pdf4_view(request,slug):
    res = requests.get(f"https://marine-form-backend.herokuapp.com/admin/form/{slug}")
    data = res.text

    parse_json=json.loads(data)

    return render(request,"new.html",{'parse_data':parse_json})


def admin(request):
    res = requests.get("https://marine-form-backend.herokuapp.com/admin/forms")
    data = res.text

    parse_json=json.loads(data)
    ids =[]
    for i in range(len(parse_json)):
        ids.append(parse_json[i]['_id']) 
    mylist = zip(parse_json, ids)

    return render(request,'admin.html',{'parse_data':mylist})



def Delete_details(request,slug):
    res = requests.delete(f'https://marine-form-backend.herokuapp.com/admin/form/delete/{slug}')
    return HttpResponseRedirect(reverse('admin_form'))
    
   