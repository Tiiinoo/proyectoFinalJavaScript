let showingContainer = home;

goHome.click(function () {
  $(showingContainer).fadeOut(1000, function() {
    home.fadeIn(1000);
    showingContainer = home;
  })
})

goToHistorical.click(function () {
  $(showingContainer).fadeOut(1500, function() {
    historical.fadeIn(500);
    showingContainer = historical;
  })
})

goTo100Top.click(function () {
  $(showingContainer).fadeOut(1500, function() {
    top100.fadeIn(1000), chargeTop100();
    showingContainer = top100;
  })
})