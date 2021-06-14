const fs = require('fs').promises
async function openFile(name, quantity, price) {
    try {
      const data = `${name}, ${quantity}, ${price}\n`
      await fs.writeFile('grocery.txt', data, {flag:'a'})
      console.log('data write in file successful')
    }catch(err) {
      console.error(err)
    }
}
openFile('apple', '1 kg', 120)





