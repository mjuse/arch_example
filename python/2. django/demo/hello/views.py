from django.http import HttpResponse
from django.template import loader

from .models import User

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def se(request):
    return HttpResponse('I love software engineering!')


def search(request, name):
    found = False
    try: 
        User.objects.get(name=name)
        found = True
    except:
        pass

    template = loader.get_template('search.html')
    context = {
        'name': name,
        'found': found,
    }
    return HttpResponse(template.render(context, request))
