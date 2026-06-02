from rest_framework import routers
from .views import TiposCafeViewSet


router = routers.DefaultRouter()
router.register(r'TiposCafe', TiposCafeViewSet)


urlpatterns = router.urls
