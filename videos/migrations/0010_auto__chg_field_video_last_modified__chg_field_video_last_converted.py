# encoding: utf-8
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models

class Migration(SchemaMigration):

    def forwards(self, orm):
        
        # Changing field 'Video.last_modified'
        db.alter_column('videos_video', 'last_modified', self.gf('django.db.models.fields.DateTimeField')(auto_now=True))

        # Changing field 'Video.last_converted'
        db.alter_column('videos_video', 'last_converted', self.gf('django.db.models.fields.DateTimeField')(null=True))


    def backwards(self, orm):
        
        # Changing field 'Video.last_modified'
        db.alter_column('videos_video', 'last_modified', self.gf('django.db.models.fields.DateField')(auto_now=True))

        # Changing field 'Video.last_converted'
        db.alter_column('videos_video', 'last_converted', self.gf('django.db.models.fields.DateField')(null=True))


    models = {
        'videos.video': {
            'Meta': {'object_name': 'Video'},
            'category': ('django.db.models.fields.CharField', [], {'max_length': '20', 'null': 'True', 'blank': 'True'}),
            'description': ('django.db.models.fields.TextField', [], {'null': 'True', 'blank': 'True'}),
            'duration': ('django.db.models.fields.IntegerField', [], {}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'last_converted': ('django.db.models.fields.DateTimeField', [], {'null': 'True', 'blank': 'True'}),
            'last_modified': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'published_on': ('django.db.models.fields.DateTimeField', [], {}),
            'rating': ('django.db.models.fields.FloatField', [], {'null': 'True', 'blank': 'True'}),
            'related': ('django.db.models.fields.CharField', [], {'max_length': '100', 'null': 'True', 'blank': 'True'}),
            'slug': ('django.db.models.fields.SlugField', [], {'unique': 'True', 'max_length': '200', 'db_index': 'True'}),
            'thumbnail': ('django.db.models.fields.URLField', [], {'max_length': '200', 'null': 'True', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '200'}),
            'views': ('django.db.models.fields.IntegerField', [], {'null': 'True', 'blank': 'True'}),
            'ytid': ('django.db.models.fields.CharField', [], {'unique': 'True', 'max_length': '20'})
        }
    }

    complete_apps = ['videos']