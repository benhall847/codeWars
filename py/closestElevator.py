def elevator(left, right, call):
    if abs(right - call) <= abs(left - call):
        return "right"
    else:
        return "left"

print(elevator(1,2,2))