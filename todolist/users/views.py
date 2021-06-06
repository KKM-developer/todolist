from rest_framework.viewsets import ModelViewSet
from .models import NewUser
from .serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
   queryset = NewUser.objects.all()
   serializer_class = UserModelSerializer