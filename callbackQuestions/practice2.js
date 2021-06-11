
// function fy(name, callback) {
//     // setTimeout(()=> {callback(),200})
//     console.log(name)
//   } 
//   function sy() {
//     setTimeout(()=> {console.log("i am callback")},300)
//   }
//   fy("jyoti", sy)

const promise = new Promise((resolve, reject) => {
      reject(1)
      resolve(2)
});
promise.then((result) => {
  console.log(result)
})
.catch((error) => {
  console.log(error)
})