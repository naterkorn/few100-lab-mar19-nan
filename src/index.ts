import './styles.css';
console.log('Ready to Party');

let selectedTip: number;
const lastTip = 'LastTip';
const tipButtons = document.querySelectorAll('.tipButton');
const tipLabel = document.getElementById('tipAmount');


tipButtons.forEach(button => {
    const btnEl = button as HTMLButtonElement;
    btnEl.addEventListener('click', handleTipButtonClick);

    if (btnEl.value === localStorage.getItem(lastTip)) {
        processTipSelection(btnEl);
    }
});


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
    tipLabel.innerText = (selectedTip * 100).toString();
}