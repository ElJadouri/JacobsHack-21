from django.db import models

class User(models.Model):
    User_ID = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=18)
    Email = models.CharField(max_length=60)
    Password = models.CharField(max_length=18)
    Is_online = models.BooleanField(default=False)
    List_of_friends = models.JSONField()
    List_of_servers = models.JSONField()
    Major = models.CharField(max_length=30)
    Room = models.CharField(max_length=6)
    

