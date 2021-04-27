describe('Googleでテストしてみよう！', () => {
    it('トップページを表示して検索をする', () => {
        console.log('START');
        cy.visit('https://www.google.com');
        // get: Elements取得
        // eq: 要素数
        // type: 入力
        cy.get('.gLFyf.gsfi').eq(0).type('TYPE!');
        // click: クリック
        cy.get('.gNO89b').eq(0).click();
        console.log('END');
    })
});
  