# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0003_auto_20160318_1530'),
    ]

    operations = [
        migrations.AddField(
            model_name='status',
            name='attack',
            field=models.IntegerField(default=6),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='status',
            name='energy',
            field=models.IntegerField(default=100),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='status',
            name='zombie_attack',
            field=models.IntegerField(default=3),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='status',
            name='food',
            field=models.IntegerField(default=15),
        ),
        migrations.AlterField(
            model_name='status',
            name='health',
            field=models.IntegerField(default=100),
        ),
        migrations.AlterField(
            model_name='status',
            name='people',
            field=models.IntegerField(default=0),
        ),
    ]
