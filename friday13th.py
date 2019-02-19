# Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

# Find the number of Friday 13th in the given year.

# Input: Year as an integer.

# Output: Number of Black Fridays in the year as an integer.

# Examples:

# unluckyDays(2015) == 3
# unluckyDays(1986) == 1



def unlucky_days(year):
    # first we import the datetime module
    import datetime
        # for each month (1-12) = i
        # in the given year, if the 13th of the month 'i' is a Friday
    return sum(datetime.date(year, i, 13).strftime("%A") == "Friday" for i in range(1, 13))
    # the sum of the 13th day of each month that is equal to "Friday"
#                                                                     #loop through each month ('i')


print(unlucky_days(1928))