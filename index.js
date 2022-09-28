const inputInitial = document.querySelector("#initial-price");
const inputQuantity = document.querySelector("#quantity-of-stocks");
const inputCurrent = document.querySelector("#current-price");
const showBtn = document.querySelector("#show-btn");
const output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {

        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        output.innerText = `The loss is ${loss} and the percentage is ${lossPercentage}%.`;
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        output.innerText = `The profit is ${profit} and the percentage is ${profitPercentage}%.`;
        // console.log(profit, profitPercentage);
        // console.log(initial, quantity, current);
    } else {
        output.innerText = "There is NO gain and NO gain."
    }
}

function clickHandler() {
    var ip = inputInitial.value;
    var qty = inputQuantity.value;
    var curp = inputCurrent.value;

    //console.log(inputInitial.value, inputQuantity.value, inputCurrent.value);
    calculateProfitAndLoss(ip, qty, curp);

}

showBtn.addEventListener('click', clickHandler);