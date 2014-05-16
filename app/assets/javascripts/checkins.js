$(document).ready(function () {
  function getCompany (event) {
    event.preventDefault();
    var company = $(this).data('name');
    $('input#checkin_company').val(company);
    $('a').removeClass("selected");
    $(this).addClass("selected");
  };

  $("#sponsors").on('click','a', getCompany);
});