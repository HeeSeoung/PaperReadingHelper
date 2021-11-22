from django.db import models

# Create your models here.


class Paper(models.Model):
    file_name = models.TextField(db_column="file_name", null=True)
    content = models.TextField()
    file_path = models.CharField(
        db_column="file_path", max_length=250, null=True)
    upload_date = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'paper'
