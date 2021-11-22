# Generated by Django 3.2.5 on 2021-11-22 08:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paper', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='paper',
            name='user',
            field=models.CharField(db_column='user', max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='paper',
            name='content',
            field=models.TextField(db_column='content'),
        ),
    ]
