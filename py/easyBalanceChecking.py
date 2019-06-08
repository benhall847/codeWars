def balance(book):
    booklist = book.split("\n")
    recordlist = []
    index = 0
    for ea_str in booklist:
        if len(ea_str) > 0:
            recordlist.append("")
        for ea_char in ea_str[len(ea_str)::-1]:
            if ea_char not in "1234567890.":
                if recordlist[index] in "1234567890.":
                    index += 1
                    recordlist.append("")
                pass
            else:
                recordlist[index] = ea_char + recordlist[index]

        if len(ea_str) > 0:
            index += 1
    return recordlist





b1 = """1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
"""

print(balance(b1))
b1sol = """Original Balance: 1000.00\r
125 Market 125.45 Balance 874.55\r
126 Hardware 34.95 Balance 839.60\r
127 Video 7.45 Balance 832.15\r
128 Book 14.32 Balance 817.83\r
129 Gasoline 16.10 Balance 801.73\r
Total expense  198.27\r
Average expense  39.65"""