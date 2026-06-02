from rest_framework import serializers
from .models import TiposCafe




#datos de del model Django a un formato que pueda enviarse por la web
class TSerializer(serializers.ModelSerializer):
    class Meta:
        model = TiposCafe
        fields = '__all__'
