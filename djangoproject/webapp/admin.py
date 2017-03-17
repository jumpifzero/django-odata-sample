from django.contrib import admin
from webapp import models

admin.site.register(models.Post)
admin.site.register(models.Tag)
admin.site.register(models.Author)
