let obj = {'a': 1, 'b': 2,
        add:function f() {
            return this.a
        }

}
let copied = JSON.parse(JSON.stringify(obj))

copied['a'] = 10
console.log(obj)
console.log(copied)