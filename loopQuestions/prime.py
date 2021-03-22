num=int(input())
a=n//2
i=1
count=0
while i<a:
    if n%i==0:
        count=count+1
    i=i+1
if count==2:
    print("prime")
else:
    print("not prime")
