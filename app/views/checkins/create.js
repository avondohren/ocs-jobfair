// Print Label
printlabel("<%= @checkin.company %>", "<%= @checkin.name %>", "<%= @checkin.title %>");

// Empty Input Cells
$('a').removeClass("selected");
$("input").val("");
$("h3.success").slideDown();
$("h3.success").delay(3000).slideUp();