from rest_framework import serializers
from . import models

class TeacherSerializer(serializers.ModelSerializer):
	class Meta:
		model=models.Teacher
		fields=['id', 'full_name', 'email', 'password', 'qualifications', 'mobile_no', 'skills']

class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model=models.CourseCategory
		fields=['id', 'title', 'description']