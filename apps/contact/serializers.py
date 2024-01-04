from rest_framework import serializers
from .models import *


class ComentarioSerializer(serializers.ModelSerializer):
    class Meta: 
        model=Coment
        fields=[
            'name',
            'comentario',
        ]
