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
});
