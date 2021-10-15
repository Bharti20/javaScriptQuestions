try {
    let list = Array(Number.MAX_VALUE);
} catch (error) {
    console.log(error.name); // "RangeError"
    console.log(error.message); // "Invalid array length"
}