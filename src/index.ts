import './styles.css';
console.log('Ready to Party');

let selectedTip: number = 0;
const lastTip = 'LastTip';
const zeroDollars = '0.00';
const billAmountInput = document.getElementById('billAmountInput') as HTMLInputElement;
const tipButtons = document.querySelectorAll('.tipButton');
const tipPercent = document.getElementById('tipPercent');

const billAmount = document.getElementById('billAmount');
const tipPercent2 = document.getElementById('tipPercent2');
const tipAmount = document.getElementById('tipAmount');
const billTotal = document.getElementById('billTotal');

billAmountInput.addEventListener('change', changeDollarAmounts);

tipButtons.forEach(button => {
    const btnEl = button as HTMLButtonElement;
    btnEl.addEventListener('click', handleTipButtonClick);

    if (btnEl.value === localStorage.getItem(lastTip)) {
        processTipSelection(btnEl);
    }
});

function changeDollarAmounts() {
    const billAmountVal = billAmountInput.valueAsNumber;
    if (billAmountVal) {
        billAmount.innerText = billAmountVal.toFixed(2).toString();
        const tipAmountVal = selectedTip * billAmountVal;
        tipAmount.innerText = tipAmountVal.toFixed(2).toString();
        billTotal.innerText = (tipAmountVal + billAmountVal).toFixed(2).toString();
    }
    else {
        billAmount.innerText = zeroDollars;
        tipAmount.innerText = zeroDollars;
        billTotal.innerText = zeroDollars;
    }

}

function handleTipButtonClick() {
    processTipSelection(this as HTMLButtonElement);
}

function processTipSelection(btn: HTMLButtonElement) {
    tipButtons.forEach(tipBtn => {
        (tipBtn as HTMLButtonElement).disabled = false
    });

    localStorage.setItem(lastTip, btn.value);
    selectedTip = parseFloat(btn.value);
    btn.disabled = true;

    const tipAsPercent = (selectedTip * 100).toString();
    tipPercent.innerText = tipAsPercent;
    tipPercent2.innerText = tipAsPercent;
    changeDollarAmounts();
}