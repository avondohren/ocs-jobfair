$(document).ready(function () {
  function getCompany (event) {
    console.log("clicked on company")
    event.preventDefault();
    var company = $(this).data('name');
    console.log("clicked on company " + company)
    $('input#company').val(company);
  };
  
  console.log("loading checkins.js")

  $("li").on('click','a.logo', getCompany);
});