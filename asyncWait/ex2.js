const samplePromise = () => Promise.resolve('A');

function f() {
    samplePromise().then(result => console.log(result))         // 'B'
    console.log('B')                                            //'A'
}

async function g() {
    console.log(await samplePromise());                        //'A'
    console.log('B')                                           // 'B'

}
f()
g()