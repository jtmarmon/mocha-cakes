require('../index.js');

Feature('My API', function() {
  Scenario('User connects', function() {
    And('they aren\'t authenticated', function() {
      it('should reject connection', function() {

      });
    });
  });
  Scenario('User diconnects', function() {
    And('the session expired', function() {
      it('should flush access token', function() {

      });
      But(function() {
        it('should not crash the server', function() {

        });
      });
    });
  });
});
