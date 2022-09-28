const inputInitial = document.querySelector("#initial-price");
const inputQuantity = document.querySelector("#quantity-of-stocks");
const inputCurrent = document.querySelector("#current-price");
const showBtn = document.querySelector("#show-btn");
const output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        output.innerText = `The loss is ${loss} and the loss percentage is ${lossPercentage}%.`;
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        output.innerText = `The profit is ${profit} and the profit percentage is ${profitPercentage}%.`;
        // console.log(profit, profitPercentage);
        // console.log(initial, quantity, current);
    } else {
        output.innerText = "There is NO gain and NO pain."
    }
}

function clickHandler() {
    var ip = Number(inputInitial.value);
    var qty = Number(inputQuantity.value);
    var curp = Number(inputCurrent.value);

    //console.log(inputInitial.value, inputQuantity.value, inputCurrent.value);
    calculateProfitAndLoss(ip, qty, curp);

}

showBtn.addEventListener('click', clickHandler);