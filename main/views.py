
from django.shortcuts import render,redirect,  get_object_or_404,HttpResponse
from django.contrib import messages
from django.urls import reverse_lazy, reverse
from django.http import HttpResponseRedirect
from django.shortcuts import render,redirect,  get_object_or_404
import requests
import json
# from requests.adapters import HTTPAdapter
# from requests.packages.urllib3.util.retry import Retry
import urllib

# Partition Of Form:
def pdf1_view(request,slug):
    res = requests.get(f"http://206.189.143.226:5000/admin/form/{slug}")
    data = res.text
    parse_json=json.loads(data)
   

    return render(request,'amptc.html',{'parse_data':parse_json})

def pdf1_apmtc2_view(request,slug):
    res = requests.get(f"http://206.189.143.226:5000/admin/form/{slug}")
    data = res.text

    parse_json=json.loads(data)


    return render(request,'amptc2.html',{'parse_data':parse_json})



def pdf2_view(request,slug):
    res = requests.get(f"http://206.189.143.226:5000/admin/form/{slug}")
    data = res.text
    parse_json=json.loads(data)
    try:
        add_skills = parse_json['additional_skills']
        print(add_skills.split(','))

        return render(request,"kotc_new.html",{'parse_data':parse_json,'skills':add_skills.split(',')})
    except:
        return render(request,"kotc_new.html",{'parse_data':parse_json})
        
def pdf3_view(request,slug):
    res = requests.get(f"http://206.189.143.226:5000/admin/form/{slug}")
    data = res.text

    parse_json=json.loads(data)

    return render(request,"warmseas.html",{'parse_data':parse_json})

def pdf4_view(request,slug):
    res = requests.get(f"http://206.189.143.226:5000/admin/form/{slug}")
    data = res.text

    parse_json=json.loads(data)
    return render(request,"new.html",{'parse_data':parse_json})


def admin(request):
   
    url ='http://206.189.143.226:5000/admin/forms'
 
    try:
        s = requests.session()
        s.keep_alive = False
        r = requests.get(url, verify=False, timeout=5)
        data = (r.text)
        parse_json=json.loads(data)
        
        ids =[]
        for i in range(len(parse_json)):
            ids.append(parse_json[i]['_id'])
        mylist = zip(reversed(parse_json), reversed(ids))

        return render(request,'admin.html',{'parse_data':mylist})


    except requests.exceptions.ConnectionError as e:
        return HttpResponse({e})
    



def Delete_details(request,slug):
    res = requests.delete(f'http://206.189.143.226:5000/admin/forms/delete/{slug}')
    return HttpResponseRedirect(reverse('admin_form'))


def sub_profile(request):
    pass