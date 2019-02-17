# Given: an array containing hashes of names

# Return: a string formatted as a list of names separated by 
# commas except for the last two names, which should be separated by an ampersand.

# Example:

# namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ])
# # returns 'Bart, Lisa & Maggie'

# namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ])
# # returns 'Bart & Lisa'

# namelist([ {'name': 'Bart'} ])
# # returns 'Bart'

# namelist([])
# # returns ''

def namelist(names):
    result = ''
    length = len(names)
    index = 0
    while length >= 3:
        result += names[index]['name'] + ', '
        index += 1
        length -= 1
    if length == 2:
        result += names[index]['name'] + ' & '
        length -= 1
        index += 1
    if length == 1:
        result += names[index]['name']
    return result