from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^overview',views.overview, name="overview"),
    url(r'^section-overview',views.section, name="section-overview"),
    url(r'^section-test',views.sectiontest, name="section-test"),
]