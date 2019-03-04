# Description
# You've been working with a lot of different file types recently as your interests have broadend.
# But what file types are you using the most? With this question in mind we look at the following problem.

# Given a List/Array of Filenames (strings) files return a List/Array of string(s) contatining the most common extension(s). If there is a tie, return all tied extensions sorted first numerically then alphabetically.

# Important Info:
# Don't forget, you've been working with a lot of different file types, so expect some interesting extensions/file names/lengths in the random tests.
# Filenames and extensions will contain letters (case sensitive), and numbers.
# If a file has multiple extensions (ie: mysong.mp3.als) only count the the last extension

def solve(files):
    result = {}
    for ea_str in files:
        fileType = ea_str.split(".")
        fileType = "." + fileType[len(fileType) - 1]
        if fileType in result.keys():
            result[fileType] += 1
        else:
            result[fileType] = 1
    counter = 0
    biggest = []
    for ea_key in result:
        if result[ea_key] > counter:
            biggest = []
            biggest.insert(0,ea_key)
            counter = result[ea_key]
        elif result[ea_key] == counter:
            biggest.insert(0,ea_key)
    biggest.sort(key=len, reverse=False)
    biggest.sort()
    return biggest
