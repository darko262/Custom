from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.conf import settings
from rest_framework.permissions import AllowAny
# Create your views here.
import environ
env = environ.Env()
import pyrebase
import json

config = {
  'apiKey': "AIzaSyCHOyJfIdHi8pA1fGo955VYP-7qaiDEWjE",
  'authDomain': "custom-garage-8c69a.firebaseapp.com",
  'databaseURL':'https://custom-garage-8c69a-default-rtdb.firebaseio.com',
  'projectId': "custom-garage-8c69a",
  'storageBucket': "custom-garage-8c69a.appspot.com",
  'messagingSenderId': "1063676141529",
  'appId': "1:1063676141529:web:e6925ae3d4a69c98b083c8",
  'measurementId': "G-TYY3GM8KZL"
}
firebase = pyrebase.initialize_app(config)
database=firebase.database()

class ComentCreateView(APIView):
    permission_classes = [AllowAny]
    def post(self, request, format=None):
    
        data=request.data
        name = data['name']
        comentario = data['comentario']
        try:
            # database.child('Data').push(data)
            database.child('Data').child(name).set(data)
            print(data)
            print(name)
            print(comentario)

            return Response({'status': 'success', 'message': 'Message sent successfully'})
        except:
            return Response({'status': 'error', 'message': 'Message not sent' })


class ComentListView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, format=None):
        try:
            data = database.child('Data').get().val()
            json_data = json.dumps(data, indent=2)
            print(json_data)
            return Response({'status': data})
        except:
            return Response({'status': 'error', 'message': 'Message not sent' })
    



# class ComentListView(APIView):
#     permission_classes = [AllowAny]
#     def get(self, request, format=None):
#         try:
#             data = database.child('Data').get().val()
#             data_from_firebase= data.json()
#             serializer = ComentarioSerializer(data_from_firebase, many=True)
#             return Response({'status': serializer.data})
#         except Exception as e:
#             print(e)
#             return Response({'status': 'error', 'message': 'Error fetching data from Firebase'})
