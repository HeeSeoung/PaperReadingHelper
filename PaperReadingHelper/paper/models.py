from django.db import models

# Create your models here.


class Paper(models.Model):
    user = models.CharField(db_column='user', max_length=250, null=True)
    file_name = models.TextField(db_column="file_name", null=True)
    content = models.TextField(db_column="content", null=True)
    file_path = models.CharField(db_column="file_path", max_length=250, null=True)
    file_text = models.TextField(db_column='file_text', null=True)
    text_tans = models.TextField(db_column='text_trans', null=True),
    page_number = models.IntegerField(db_column='page_number', null=True)
    upload_date = models.DateTimeField(auto_now=True)


    class Meta:
        db_table = 'paper'
