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
    # begin a counter, to count how many Friday 13ths their are.
    count = 0
    # for each month (1-12) = i
    for i in range(1,13):
        # in the given year, if the 13th of the month 'i' is a Friday
        if datetime.date(year, i, 13).strftime("%A") == "Friday":
            # add 1 to the counter
            count += 1
        # loop through each month ('i')

    return count

print(unlucky_days(1928))