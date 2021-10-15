const input = require('readline-sync')
let country_code = input.question('Enter country code...')
let product_code = input.question('Enter product code...')
let weight_in_kg = input.question('Enter weight....')
let code = product_code[0]+product_code[1]+product_code[2]

if(country_code == 'uk' && weight_in_kg < 5) {
    let shipping_cost = 5
    if(code == 123) {
        let total_shipping_cost = shipping_cost*1.2
        let cost_with_gst = total_shipping_cost*18/100
        let total_cost = total_shipping_cost + cost_with_gst
        console.log(total_cost)
        let gbp = total_cost/100
        console.log(`${gbp} GBP`)
    }else if(code == 234){
        let total_shipping_cost = shipping_cost*1.5
        let cost_with_gst = total_shipping_cost*18/100
        let total_cost = total_shipping_cost + cost_with_gst
        let gbp = total_cost/100
        console.log(`${gbp} GBP`)        
    }else{
        let cost_with_gst = shipping_cost*18/100
        let total_cost = shipping_cost + cost_with_gst
        let gbp = total_cost/100
        console.log(`${gbp} GBP`) 
    }
}else if(country_code == 'uk' && weight_in_kg >= 5) {
    let shipping_cost = 15
    if(code ==123) {
        let total_shipping_cost = shipping_cost*1.2
        let cost_with_gst = total_shipping_cost*18/100
        let total_cost = total_shipping_cost + cost_with_gst
        let gbp = total_cost/100
        console.log(`${gbp} GBP`)
    }else if(code == 234){
        let total_shipping_cost = shipping_cost*1.5
        let cost_with_gst = total_shipping_cost*18/100
        let total_cost = total_shipping_cost + cost_with_gst
        let gbp = total_cost/100
        console.log(`${gbp} GBP`)
    }else{
        let cost_with_gst = shipping_cost*18/100
        let total_cost = shipping_cost + cost_with_gst
        let gbp = total_cost/100
        console.log(`${gbp} GBP`) 
    };
}else if(country_code =='us' && weight_in_kg <10) {
    let shipping_cost = 5
    if(code == 123) {
        let total_shipping_cost = shipping_cost*1.2
        let cost_with_gst = total_shipping_cost*18/100
        let total_cost = total_shipping_cost + cost_with_gst
        let usd = total_cost/80
        console.log(usd, 'USD')
    }else if(code == 234){
        let total_shipping_cost = shipping_cost*1.5
        let cost_with_gst = total_shipping_cost*18/100
        let total_cost = total_shipping_cost + cost_with_gst
        let usd = total_cost/80
        console.log(use, 'USD')
    }else{
        let cost_with_gst = shipping_cost*18/100
        let total_cost = shipping_cost + cost_with_gst
        let usd = total_cost/80
        console.log(usd, 'USD')
    };
}else if(country_code == 'us' && weight_in_kg >= 10) {
    let shipping_cost = 15
    if(code ==123) {
        let total_shipping_cost = shipping_cost*1.2
        let cost_with_gst = total_shipping_cost*18/100
        let total_cost = total_shipping_cost + cost_with_gst
        let usd = total_cost/80
        console.log(use, 'USD')
    }else if(code == 234){
        let total_shipping_cost = shipping_cost*1.5
        let cost_with_gst = total_shipping_cost*18/100
        let total_cost = total_shipping_cost + cost_with_gst
        let usd = total_cost/80
        console.log(use, 'USD')
    }else{
        let cost_with_gst = shipping_cost*18/100
        let total_cost = shipping_cost + cost_with_gst
        let usd = total_cost/80
        console.log(usd, 'USD')
    };
}else{
    console.log('Shipping cost is not applicable')
};

