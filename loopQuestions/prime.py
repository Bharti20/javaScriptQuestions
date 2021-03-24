# num=int(input())
# a=n//2
# i=1
# count=0
# while i<a:
#     if n%i==0:
#         count=count+1
#     i=i+1
# if count==2:
#     print("prime")
# else:
#     print("not prime")

# num=4
# i=2
# while i<num*0.5:
#     if num%i==0:
#         print("not")
#     i=i+1
# else:
#     print("prime")

num=3
i=1
while i<=(num*0.5):
  if num%i==0:
    print("not")
    break
  i=i+1
else:
    print("prime")
