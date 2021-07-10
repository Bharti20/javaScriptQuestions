  let i = 1
  let index = 6
  while(i<=index){
      let j = 0
      var concati = ""
      while(j<index-i){
          concati+= " "
          j++
      }
      let z = 0
      while(z<i*2-1) {
          concati+="*"
          z++
      }console.log(concati)
      i++
  }