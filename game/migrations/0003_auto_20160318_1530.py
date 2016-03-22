# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0002_mark_status'),
    ]

    operations = [
        migrations.RenameField(
            model_name='status',
            old_name='suivival',
            new_name='survival',
        ),
        migrations.AlterField(
            model_name='status',
            name='people',
            field=models.IntegerField(default=1),
        ),
    ]
