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
from decouple import config


# Firebase Configuration
FIREBASE_API_KEY = config('FIREBASE_API_KEY')
FIREBASE_AUTH_DOMAIN = config('FIREBASE_AUTH_DOMAIN')
FIREBASE_DATABASE_URL = config('FIREBASE_DATABASE_URL')
FIREBASE_PROJECT_ID = config('FIREBASE_PROJECT_ID')
FIREBASE_STORAGE_BUCKET = config('FIREBASE_STORAGE_BUCKET')
FIREBASE_MESSAGING_SENDER_ID = config('FIREBASE_MESSAGING_SENDER_ID')
FIREBASE_APP_ID = config('FIREBASE_APP_ID')
FIREBASE_MEASUREMENT_ID = config('FIREBASE_MEASUREMENT_ID')
config = {
    'apiKey': FIREBASE_API_KEY,
    'authDomain': FIREBASE_AUTH_DOMAIN,
    'databaseURL': FIREBASE_DATABASE_URL,
    'projectId': FIREBASE_PROJECT_ID,
    'storageBucket': FIREBASE_STORAGE_BUCKET,
    'messagingSenderId': FIREBASE_MESSAGING_SENDER_ID,
    'appId': FIREBASE_APP_ID,
    'measurementId': FIREBASE_MEASUREMENT_ID,
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
