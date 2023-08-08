export const SELECTOR = Object.freeze({
  PLUS_BUTTON: '.plus-button',
  MINUS_BUTTON: '.minus-button',
  COUNTER: '.count-display',
});

const COUNTER = Object.freeze({
  MAX_VALUE: 12,
  MIN_VALUE: 8,
});

export default function Counter({ $app }) {
  let $plusButton;
  let $minusButton;
  let $countDisplay;

  const addCountBy = (value) => {
    let currentValue = Number($countDisplay.value);
    const countResult = currentValue + value;

    if (countResult <= COUNTER.MAX_VALUE && countResult >= COUNTER.MIN_VALUE) {
      $countDisplay.value = countResult;
    }
  };

  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const init = () => {
    render();
    setQuerySelectors();
  };

  const setQuerySelectors = () => {
    $plusButton = $app.querySelector(SELECTOR.PLUS_BUTTON);
    $minusButton = $app.querySelector(SELECTOR.MINUS_BUTTON);
    $countDisplay = $app.querySelector(SELECTOR.COUNTER);

    $plusButton.addEventListener('click', (event) => {
      event.preventDefault();
      addCountBy(1);
    });

    $minusButton.addEventListener('click', (event) => {
      event.preventDefault();
      addCountBy(-1);
    });
  };

  init();
}
