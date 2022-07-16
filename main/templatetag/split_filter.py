from django import template
  
register = template.Library()
@register.filter(name='split')
def split(value):
    """
        Returns the value turned into a list.
    """
    value=value[:10]
    return value

@register.filter(name='split2')
def split2(value):
    """
        Returns the value turned into a list.
    """
    return value[12:19]