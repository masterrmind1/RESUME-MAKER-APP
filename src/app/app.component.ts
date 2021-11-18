import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'htmlToPDF';
  @ViewChild('pdfTable') pdfTable: ElementRef;
  public downloadAsPDF(): any {
    html2canvas(this.pdfTable.nativeElement).then(canvas => {
      const img = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        format: 'a4'
      });
      const imgProps = pdf.getImageProperties(img);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(img, 'JPEG', 0, 0, 0, 0, null, 'FAST', 0);
      pdf.save('test.pdf');
    });
}
}
