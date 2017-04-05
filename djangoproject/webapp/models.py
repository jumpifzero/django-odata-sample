from django.db import models

class Post(models.Model):
  title = models.CharField(max_length=1024)
  author = models.ForeignKey('Author', blank=True)
  body = models.TextField()
  publishDate = models.DateField()
  tags = models.ManyToManyField('Tag', blank=False)

class Tag(models.Model):
  name = models.CharField(max_length=1024)

class Author(models.Model):
  name = models.CharField(max_length=1024)
  dateOfBirth = models.DateField()

class CustomerDemographic(models.Model):
	CustomerDesc = models.CharField(max_length=100)
	Customers = models.ManyToManyField('Customer', 
		related_name='CustomerDemographics')

class Customer(models.Model):
	CompanyName = models.CharField(max_length=40)
	ContactName = models.CharField(max_length=30)
	# TODO.. more fields