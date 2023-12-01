from rest_framework import serializers
from .models import *


class PostSerializer(serializers.ModelSerializer):
  
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'media_file',
            'description',
            'content',
            'service_type',
            'bike_model',
            'service_price',
            'completion_date',
            'time_read',
            'published',
            'views',
          
        ]

class PostListSerializer(serializers.ModelSerializer):

    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'media_file',
            'description',
            'content',
            'service_type',
            'bike_model',
            'service_price',
            'completion_date',
            'time_read',
            'published',
            'views',
        ]