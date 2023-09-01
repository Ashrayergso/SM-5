```python
from django.test import TestCase
from .models import Resources, ShipDetails, Schedule

class ResourcesModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Resources.objects.create(name='John Doe', role='Captain')

    def test_name_content(self):
        resource = Resources.objects.get(id=1)
        expected_object_name = f'{resource.name}'
        self.assertEquals(expected_object_name, 'John Doe')

class ShipDetailsModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        ShipDetails.objects.create(name='Ship A', rank=1)

    def test_name_content(self):
        ship = ShipDetails.objects.get(id=1)
        expected_object_name = f'{ship.name}'
        self.assertEquals(expected_object_name, 'Ship A')

class ScheduleModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Schedule.objects.create(resource_id=1, ship_id=1, start_date='2022-01-01', end_date='2022-01-31')

    def test_start_date_content(self):
        schedule = Schedule.objects.get(id=1)
        expected_object_start_date = f'{schedule.start_date}'
        self.assertEquals(expected_object_start_date, '2022-01-01')
```