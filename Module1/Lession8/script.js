const rateUsdToVnd = 23000;
const vnd = "VND";
const usd = "USD"
let amount = 0;
let fromCurrency = document.getElementById('fromCurrency').value;
let toCurrency = document.getElementById('toCurrency').value;
let result = document.getElementById('result');

function convert(){
    amount = parseInt(document.getElementById('amount').value);
    fromCurrency = document.getElementById('fromCurrency').value;
    toCurrency = document.getElementById('toCurrency').value;
    // if(fromCurrency == vnd){
    //     if(toCurrency == vnd){
    //         result.value = amount;
    //     }
    //     if(toCurrency == usd){
    //         result.value = amount/rateUsdToVnd;
    //     }
    // }
    // if(fromCurrency == usd){
    //     if(toCurrency == usd){
    //         result.value = amount;
    //     }
    //     if(toCurrency == vnd){
    //         result.value = amount*rateUsdToVnd;
    //     }
    // }
    switch(fromCurrency){
        case vnd:{
                switch(toCurrency){
                    case vnd:{
                        result.value = amount
                        break;
                    }
                    case usd:{
                        result.value = amount/rateUsdToVnd;
                        break;
                    }
                }
                break;
            }
        case usd:{
            switch(toCurrency){
                case vnd:{
                    result.value = amount*rateUsdToVnd
                    break;
                }
                case usd:{
                    result.value = amount;
                    break;
                }
            }
            break
        }
    }
}
