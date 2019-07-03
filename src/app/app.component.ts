import {Component, Inject} from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class AppComponent {
  title = 'my-app';

  constructor(
    @Inject('Window') private window: Window,
  ) { }
  download() {
    const doc = new jsPDF();
    // doc.setFont('MPLUS1p-Bold', 'bold'); // set font
    doc.setFont('KosugiMaru-Regular', 'normal'); // set font
    doc.setFontSize(20);

    // doc.text('なに', 20, 20);
    const splitTitle = doc.splitTextToSize('火曜日には、秋篠皇太子妃殿下と紀子皇太子妃が、ヘルシンキにあるフィンランド国立美術館', 180);
    doc.text(15, 20, splitTitle);
    // doc.text('火曜日には、秋篠皇太子妃殿下と紀子皇太子妃が、ヘルシンキにあるフィンランド国立美術館', 20, 20);
    doc.save('Test.pdf');
  }
}
