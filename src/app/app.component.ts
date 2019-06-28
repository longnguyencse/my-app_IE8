import { Component, OnInit, Inject } from '@angular/core';
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
    // doc.text(20, 20, 'Hello world!');
    // doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    // doc.addPage();
    // doc.text(20, 20, 'Do you like that?');



    // doc.addFileToVFS('../assets/fonts/NotoSansCJKjp-Regular.ttf', 'NotoSansCJKjp');
    // doc.addFont('../assets/fonts/NotoSansCJKjp-Regular.ttf', 'NotoSansCJKjp', 'normal');

    doc.addFileToVFS('../assets/fonts/togalite-regular.otf', 'NotoSansCJKjp');
    doc.addFont('../assets/fonts/togalite-regular.otf', 'NotoSansCJKjp', 'normal');
    doc.setFont('NotoSansCJKjp');

    doc.text(15, 30, 'こんにちは。はじめまして。');

    // multi-lines Test
    // const paragraph = '相次いで廃止された寝台列車に代わり、いまや夜間の移動手段として主力になりつつある夜行バス。「安い」「寝ながら移動できる」などのメリットを生かすため、運行ダイヤはどのように組まれているのでしょうか。夜遅く出て、朝早く着くというメリット夜行バスを使うメリットといえば、各種アンケートでもいちばん多い回答の「安い」以外に、';
    // const lines = doc.splitTextToSize(paragraph, 150);
    // doc.text(15, 60, lines);
    // Save the PDF
    doc.save('Test.pdf');
  }
}
