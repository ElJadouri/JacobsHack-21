from rest_framework import serializers
from User.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('User_ID', 'Username', 'Email',  'Password', 'Is_online', 'List_of_friends', 'List_of_servers', 'Major', 'Room')