from rest_framework.serializers import HyperlinkedModelSerializer
from .models import NewUser


class UserModelSerializer(HyperlinkedModelSerializer):
   class Meta:
       model = NewUser
       fields = ['user_name', 'first_name', 'last_name', 'email']