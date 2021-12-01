from rest_framework import serializers
from Servers.models import Server

class ServerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Server
        fields = ('Server_ID', 'Server_name', 'Admin',  'List_of_Users', 'List_of_Channels')