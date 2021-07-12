function download(url, callback) {
    setTimeout(()=>{
        console.log(`download ${url}`)
        callback(url)
    }, 3000);
    
};
const process = function(picture) {
    console.log(`picture ${picture}`)
};

let url = 'https://www.javascripttutorial.net/foo.jg';

download(url, process);


//in shoter way
function download(url, callback) {
    setTimeout(()=>{
        console.log(`download ${url}`)
        callback(url)
    }, 3000);
    
};
let url = 'https://www.javascripttutorial.net/foo.jg';

download(url, function(picture){
    console.log(`picture ${picture}`)
});