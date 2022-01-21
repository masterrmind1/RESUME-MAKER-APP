import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ResumeServiceService } from '../resume-service/resume-service.service';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent  {
  data;
  

  @ViewChild('pdfElement') pdfElement: ElementRef;
  constructor(private resumeService: ResumeServiceService ) { }

  ngOnInit(): void {
    this.getResumeDataFromService();
    this.getPrintCommand();
  }

  getResumeDataFromService(): any{
   this.resumeService.getResumeData().subscribe((v) => {
     console.log(v);
     this.data = v;
   });
  }

  getPrintCommand(): any{
    this.resumeService.getPrintCommand().subscribe( (event) => {
      html2canvas(this.pdfElement.nativeElement).then(canvas => {
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
    });
  }


}