# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0004_auto_20160323_0155'),
    ]

    operations = [
        migrations.AlterField(
            model_name='status',
            name='attack',
            field=models.FloatField(default=6.0),
        ),
    ]
