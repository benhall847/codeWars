def elevator(left, right, call):
    if right == call:
        return "right"
    elif left == call:
        return "left"
    elif abs(right - call) <= abs(left - call):
        return "right"
    else:
        return "left"