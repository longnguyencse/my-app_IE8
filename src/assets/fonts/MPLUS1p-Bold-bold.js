﻿(function (jsPDFAPI) {
  var callAddFont = function () {
    this.addFileToVFS('MPLUS1p-Bold-bold.ttf', font);
    this.addFont('MPLUS1p-Bold-bold.ttf', 'MPLUS1p-Bold', 'bold');
  };
  jsPDFAPI.events.push(['addFonts', callAddFont])
})(jsPDF.API);