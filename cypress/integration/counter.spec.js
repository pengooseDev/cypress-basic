describe('ui-counter', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8000/');
  });

  it('생성시 버튼과 초기값(10)을 렌더링 한다', () => {
    cy.get('.counter').find('.count-display').should('have.value', '10');
  });

  it('+ 버튼을 클릭 시 count가 1증가한다', () => {
    cy.get('plus-button').click();
    cy.get('.count-display').should('have.value', '11');
  });

  it('- 버튼을 클릭 시 count가 1감소한다', () => {
    cy.get('minus-button').click();
    cy.get('.count-display').should('have.value', '9');
  });

  it('count의 값은 12를 넘어갈 수 없다', () => {
    const TOTAL_CLICK = 5;
    for (let clickCount = 0; clickCount < TOTAL_CLICK; clickCount++) {
      cy.get('plus-button').click();
    }

    cy.get('.count-display').should('have.value', 12);
  });
});
