```python
from django.urls import path
from . import views

urlpatterns = [
    path('resources/', views.ResourcesList.as_view()),
    path('resources/<int:pk>/', views.ResourcesDetail.as_view()),
    path('shipdetails/', views.ShipDetailsList.as_view()),
    path('shipdetails/<int:pk>/', views.ShipDetailsDetail.as_view()),
    path('schedule/', views.ScheduleList.as_view()),
    path('schedule/<int:pk>/', views.ScheduleDetail.as_view()),
]
```