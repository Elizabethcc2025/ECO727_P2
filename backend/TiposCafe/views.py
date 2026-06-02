from rest_framework import viewsets
from .models import TiposCafe #Este se cambia al nombre de la clase models
from .serializers import TiposCafeSerializer #Esto se cambiar por el nombre de la clase del archivo serializes


class TiposCafeViewSet(viewsets.ModelViewSet): #Nombre de la clase views
    queryset = TiposCafe.objects.all()   #Nombre del model
    serializer_class = TiposCafeSerializer #Nombre del serializers

