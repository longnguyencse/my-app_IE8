﻿(function (jsPDFAPI) {
  var callAddFont = function () {
    this.addFileToVFS('Kosugi-Regular-normal.ttf', font);
    this.addFont('Kosugi-Regular-normal.ttf', 'Kosugi-Regular', 'normal');
  };
  jsPDFAPI.events.push(['addFonts', callAddFont])
})(jsPDF.API);