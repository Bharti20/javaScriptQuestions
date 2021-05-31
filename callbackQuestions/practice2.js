
function fy(name, callback) {
    // setTimeout(()=> {callback(),200})
    console.log(name)
  } 
  function sy() {
    setTimeout(()=> {console.log("i am callback")},300)
  }
  fy("jyoti", sy)
