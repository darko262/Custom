from django.urls import path

from .views import *

urlpatterns = [
    path('',ComentCreateView.as_view() ),
    path('list',ComentListView.as_view())
]