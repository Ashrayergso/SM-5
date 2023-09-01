```python
from django.contrib import admin
from .models import Resources, ShipDetails, Schedule

# Register your models here.
admin.site.register(Resources)
admin.site.register(ShipDetails)
admin.site.register(Schedule)
```