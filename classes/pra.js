class user {
    constructor (name, email) {
        this.name = name
        this.email = email
    }
}
class client extends user {
    constructor (name, email, hobbie) {
        super(name, email)
        this.hobbie = hobbie
    }
}
let parent = new user('bharti', 'bharti@gmail')

let result = new client('bharti', 'bharti@gmail','dance')
console.log(result)

