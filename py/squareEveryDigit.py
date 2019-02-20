# Welcome. In this kata, you are asked to square every digit of a number.

# For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

# Note: The function accepts an integer and returns an integer

def square_digits(num):
    result = ''
    # for each integer in num
    for each_number in str(num):
        # add the square root of that integer, as a string, to result.
        result += str(int(each_number) ** 2)
    # convert our result from a string to integers and return the result
    return int(result)