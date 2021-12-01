from django.db import models

class Server(models.Model):
    Server_ID = models.AutoField(primary_key=True)
    Server_name = models.CharField(max_length=18)
    Admin = models.IntegerField()
    List_of_Users = models.JSONField()
    List_of_Channels = models.JSONField()

