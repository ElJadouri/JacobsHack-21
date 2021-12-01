from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from User.models import User
from User.serializers import UserSerializer


@csrf_exempt
def userApi(request, id=0):
    if request.method == "GET":
        users = User.objects.all()
        UsersSerializer = UserSerializer(users, many=True)
        return JsonResponse(UsersSerializer.data, safe=False)
    elif request.method == "POST":
        user_data = JSONParser().parse(request)
        user_serializer= UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added successfully", safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method == "DELETE":
        user = User.objects.get(User_ID=id)
        user.delete()
        return JsonResponse("Deleted Succeffully", safe=False)
    elif request.method=='PUT':
        user_data = JSONParser().parse(request)
        user=User.objects.get(User_ID=user_data['User_ID'])
        User_serializer=UserSerializer(user,data=user_data)
        if User_serializer.is_valid():
            User_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)