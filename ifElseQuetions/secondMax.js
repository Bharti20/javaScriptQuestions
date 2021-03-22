a=int(input("enter a number"))
b=int(input("enter a number"))
c=int(input("enter a number"))
if a>b and a>c:
    if b>c and b<a:
        print(b)
    else:
        print(c)
elif b>a and b>c:
    if a>c and a<b:
        print(a)
    else:
        print(c)
elif c>a and c>b:
    if a>b and a<c:
        print(a)
    else:
        print(b)
else:
    print(c)