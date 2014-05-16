// prints printers information
function dymoprint(printer, company, personName, title)
{
    // select label layout/template based on printer type
    switch(company) {
    case "agape":
      var labelXml = agape;
      break;
    case "bwb":
      var labelXml = bwb;
      break;
    case "es":
      var labelXml = es;
      break;
    case "flywheel":
      var labelXml = flywheel;
      break;
    case "hudl":
      var labelXml = hudl;
      break;
    case "lemonly":
      var labelXml = lemonly;
      break;
    case "lyconic":
      var labelXml = lyconic;
      break;
    case "ocs":
      var labelXml = ocs;
      break;
    case "swanrus":
      var labelXml = swanrus;
      break;
    case "west":
      var labelXml = west;
      break;
    case "mtrl":
      var labelXml = mtrl;
      break;
    }

    // create label set to print printers' data
    var labelSetBuilder = new dymo.label.framework.LabelSetBuilder();

    // process each printer info as a separate label
    var record = labelSetBuilder.addRecord();

    // when printing put info into object with name "Text"
    record.setTextMarkup("NAME", personName);
    record.setTextMarkup("TITLE", title);
    
    // finally print label with default printing parameters
    dymo.label.framework.printLabel(printer.name, "", labelXml, labelSetBuilder);
}

function printlabel(company, personName, title)
{
  var printer = dymo.label.framework.getPrinters()[0];
  
  if (!printer){
      alert("Printer not found.");
  } else if (printer.printerType != "LabelWriterPrinter") {
      alert("Unsupported printer. Skipping print.");
  } else {
      dymoprint(printer, company, personName, title);
  }
}
