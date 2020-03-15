Feature('404 Error Page');

Scenario('should load 404 page', (I) => {
  I.amOnPage('/some_non_existent_page');
  I.click('Preview custom 404 page');
  I.see('404 page');
});
