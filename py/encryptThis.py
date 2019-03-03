# Description:
# Encrypt this!

# You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

# Your message is a string containing space separated words.
# You need to encrypt each word in the message using the following rules:
# The first letter needs to be converted to its ASCII code.
# The second letter needs to be switched with the last letter
# Keepin' it simple: There are no special characters in input.
# Examples:
# encrypt_this("Hello") == "72olle"
# encrypt_this("good") == "103doo"
# encrypt_this("hello world") == "104olle 119drlo"

def encrypt_this(text):
    text_list = text.split(" ")
    result = ''
    if len(text) > 0:
        for ea_string in text_list:
            if len(ea_string) == 1:
                result += str(ord(ea_string[0]))
            if len(ea_string) > 1:
                result += str(ord(ea_string[0])) + ea_string[len(ea_string) - 1] + ea_string[2:len(ea_string) - 1]
            if len(ea_string) > 2:
                result += ea_string[1]
            if len(ea_string) >= 1:
                result += " "
    return result[:-1]