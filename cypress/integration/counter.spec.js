import { SELECTOR } from '../../src/js/modules/Counter';

describe('ui-counter', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8000/');
  });

  const clickButton = (selector, times = 1) => {
    for (let i = 0; i < times; i++) cy.get(selector).click();
  };

  const counterShouldBe = (expected) =>
    cy.get(SELECTOR.COUNTER).should('have.value', expected);

  it('생성시 버튼과 초기값(10)을 렌더링 한다', () => {
    counterShouldBe('10');
  });

  it('+ 버튼을 클릭 시 count가 1증가한다', () => {
    clickButton(SELECTOR.PLUS_BUTTON);
    counterShouldBe('11');
  });

  it('- 버튼을 클릭 시 count가 1감소한다', () => {
    clickButton(SELECTOR.MINUS_BUTTON);
    counterShouldBe('9');
  });

  it('count의 값은 12를 넘어갈 수 없다', () => {
    const NUMBER_OF_CLICKS = 5;
    clickButton(SELECTOR.PLUS_BUTTON, NUMBER_OF_CLICKS);

    counterShouldBe('12');
  });

  it('count의 값은 8 아래로 떨어질 수 없다', () => {
    const NUMBER_OF_CLICKS = 5;
    clickButton(SELECTOR.MINUS_BUTTON, NUMBER_OF_CLICKS);

    counterShouldBe('8');
  });
});
