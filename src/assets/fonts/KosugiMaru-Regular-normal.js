﻿(function (jsPDFAPI) {
  var callAddFont = function () {
    this.addFileToVFS('KosugiMaru-Regular-normal.ttf', font);
    this.addFont('KosugiMaru-Regular-normal.ttf', 'KosugiMaru-Regular', 'normal');
  };
  jsPDFAPI.events.push(['addFonts', callAddFont])
})(jsPDF.API);