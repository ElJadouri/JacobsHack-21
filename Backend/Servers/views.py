from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Servers.models import Server
from Servers.serializers import ServerSerializer


@csrf_exempt
def serverAPI(request, id=0):
    if request.method == "GET":
        servers = Server.objects.all()
        ServersSerializer = ServerSerializer(servers, many=True)
        return JsonResponse(ServersSerializer.data, safe=False)
    elif request.method == "POST":
        server_data = JSONParser().parse(request)
        ServersSerializer= ServerSerializer(data=server_data)
        if ServersSerializer.is_valid():
            ServersSerializer.save()
            return JsonResponse("Added successfully", safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method == "DELETE":
        server = Server.objects.get(Server_ID=id)
        server.delete()
        return JsonResponse("Deleted Succeffully", safe=False)
    elif request.method=='PUT':
        server_data = JSONParser().parse(request)
        server=Server.objects.get(Server_ID=server_data['Server_ID'])
        ServersSerializer=ServerSerializer(server,data=server_data)
        if ServersSerializer.is_valid():
            ServersSerializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)