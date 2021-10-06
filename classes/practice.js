class User {
    constructor(name, lastname, city) {
        this.name = name,
        this.city = city,
        this.lastname = lastname
    }
    getFullName() {
        let fullName = `${this.name} ${this.lastname}`
        return fullName
    }
}
let userDetails = new User('Bharti', 'kumari', 'Kishanganj')
console.log(typeof(User))

console.log(userDetails)
let secondUser = new User('Sarmitsha', 'maitry', 'Kolkata')
console.log(secondUser)
console.log(secondUser.getFullName())