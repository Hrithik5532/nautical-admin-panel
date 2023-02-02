from django.urls import path,  include
from .views import *
urlpatterns=[
    path('',admin,name='admin_form'),
        path('admin_form',admin,name='admin_form'),

    path(r'pdf1/<slug>', pdf1_view,name='pdf1'), 
        path(r'pdf_2/<slug>',pdf2_view,name="pdf2"),
        path(r'pdf_3/<slug>',pdf3_view,name="pdf3"),
        path(r'pdf_4/<slug>',pdf4_view,name='pdf4'),
       
        path('Amptc_form_2/<slug:slug>',pdf1_apmtc2_view,name="amptc2")
        ,path('delete/<slug>',Delete_details,name='delete'),


]