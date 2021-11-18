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

}