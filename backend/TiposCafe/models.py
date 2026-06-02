from django.db import models





class TiposCafe(models.Model):
    #agregando 9 campos más el id de tipo int que se genera en automatico seran 10
      # Identificador único
    nombre_cliente = models.CharField(max_length=200)
    correo_electronico = models.EmailField(max_length=200)
    telefono_contacto = models.CharField(max_length=20)
    tipo_cafe_preferido = models.CharField(max_length=100)
    tamano_bebida = models.CharField(max_length=50)
    nivel_intensidad = models.CharField(max_length=50)
    tipo_leche = models.CharField(max_length=100)
    comentarios = models.TextField(blank=True, null=True)
    fecha_hora_pedido = models.DateTimeField()

    def __str__(self):
        return self.titulo
