# Generated by Django 3.2.5 on 2021-12-11 05:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paper', '0005_alter_paper_file_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='paper',
            name='page_number',
            field=models.IntegerField(db_column='page_number', null=True),
        ),
    ]
