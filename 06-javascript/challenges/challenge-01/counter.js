const elements = ['increment', 'decrement', 'count', 'step1', 'step5', 'step10', 'reset']
  .map(id => document.getElementById(id));

const [inc, dec, countContent, one, five, ten, reset] = elements;

let count = 0;
let value = 1;

function updateDisplay(color) {
  countContent.textContent = `${count}`; // template literal
  countContent.style.color = color;
}

// increment handler
inc.addEventListener('click', () => {
  count += value;
  updateDisplay(`green`);
});

// decrement handler
dec.addEventListener('click', () => {
  count = count > 0 ? count - value : 0;
  updateDisplay(`red`);
});

// reset handler
reset.addEventListener('click', () => {
  count = 0;
  updateDisplay(`black`);
});

// step buttons → using array + map to avoid repetition
[
  { btn: one, step: 1 },
  { btn: five, step: 5 },
  { btn: ten, step: 10 }
].map(item => 
  item.btn.addEventListener('click', () => {
    value = item.step;
    console.log(`Step changed to: ${value}`); // template literal inside log
  })
);
