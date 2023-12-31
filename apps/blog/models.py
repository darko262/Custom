from django.db import models

from django.utils import timezone
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from apps.category.models import Category, Marca
def blog_thumbnail_directory(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

# Create your models here.
class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    servicios= (("mantenimiento", "Mantenimiento"),("reparacion", "Reparacion") ,("personalizacion","Personalizacion"))

    title =         models.CharField(max_length=255)
    slug =          models.SlugField(max_length=255, unique=True)
    thumbnail =     models.ImageField(upload_to=blog_thumbnail_directory, max_length=500)
    media_file = models.FileField(upload_to=blog_thumbnail_directory, blank=True)  
    description =   models.TextField(max_length=255)
    content =       RichTextField()
    service_type = models.CharField(max_length=50, choices=servicios)
    bike_model = models.CharField(max_length=50)
    service_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    completion_date = models.DateField()
    time_read =     models.IntegerField()

    published =     models.DateTimeField(default=timezone.now)
    views =         models.IntegerField(default=0, blank=True)

    status =        models.CharField(max_length=10, choices=options, default='draft')
    category =      models.ForeignKey(Category, on_delete=models.PROTECT, blank=True, null=True)
    marca = models.ForeignKey(Marca, on_delete=models.SET_NULL, null=True, blank=True)

    objects =           models.Manager()  # default manager
    postobjects =       PostObjects()  # custom manager

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views



class ViewCount(models.Model):
    post = models.ForeignKey(Post, related_name='blogpost_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"
