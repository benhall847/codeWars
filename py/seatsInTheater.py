def seats_in_theater(tot_cols, tot_rows, col, row):
    result = 0
    totalCol = tot_cols - (col-1)
    totalRow = tot_rows - (row)
    result = totalCol * totalRow
    return result
