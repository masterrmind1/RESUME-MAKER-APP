import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ResumeServiceService } from '../resume-service/resume-service.service';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  allFormGroup: FormGroup;
  index = 0;
  accordianStep = 0;

  constructor(private formBuilder: FormBuilder,
              private resumeService: ResumeServiceService) {}

  ngOnInit(): void {
    this.allFormGroup = this.formBuilder.group({
      contactFromGroup: this.formBuilder.group({
        firstName: ['wqeqw', Validators.required],
        lastName: ['qwewq'],
        address: ['wqeq', Validators.required],
        zip: ['123123', [Validators.required, Validators.pattern('^[0-9]*$')]],
        number: ['1234567890', [Validators.required, Validators.pattern('^[0-9]*$')]],
        email: ['acf@sad', [Validators.required, Validators.email]],
      }),
      employement: this.formBuilder.group({}),
      education: this.formBuilder.group({
        bechlors: this.formBuilder.group({
          univ: ['', ],
          degreeName: [''],
          passingYear: [''],
          startingYear: ['']
        }),
        masters: this.formBuilder.group({
          univ: ['', ],
          degreeName: [''],
          passingYear: [''],
          startingYear: ['']
        }),
      })
    });
    this.updateData();
  }

  getStepperValue(): string{
    switch (this.index){
      case 0: {
        return 'Contact Details';
      }
      case 1: {
        return 'ABOUT';
      }
      case 2: {
        return 'EDUCATION';
      }
      case 3: {
        return 'EXPERIENCE';
      }
      case 4: {
        return 'SKILLS';
      }
      case 5: {
        return 'FINISH';
      }
    }
  }

  goToNext(): void{
    this.updateData();
    if (this.index === 2){
      this.resumeService.sendPrintCommand();
    }
    if (this.index < 5){
      this.index = this.index + 1;
    }else{
      console.log('finish');
    }
  }

  goBack(): void{
    if (this.index > 0){
    this.index = this.index - 1;
    }
  }
  updateData(): void{
    this.resumeService.setResumeData(this.allFormGroup.value);
  }


  setStep(index: number): any {
    this.accordianStep = index;
  }

  nextStep(): any {
    this.accordianStep++;
  }

  prevStep(): any {
    this.accordianStep--;
  }

  addEmplyment(): any{
    if (this.allFormGroup.get('employement').get('first')){
      if (this.allFormGroup.get('employement').get('second')){

      }else{
        (this.allFormGroup.get('employement') as FormGroup).addControl('second', this.formBuilder.group({
            companyName: ['wqeqw', Validators.required],
            isInternship: [false, Validators.required],
            designation: ['wqeqw', Validators.required],
            startDate: ['wqeqw', Validators.required],
            endDate: ['wqeqw', Validators.required],
            about: ['wqeqw', Validators.required],
        }));
      }
    }else{
      (this.allFormGroup.get('employement') as FormGroup).addControl('first', this.formBuilder.group({
          companyName: ['wqeqw', Validators.required],
          isInternship: [false, Validators.required],
          designation: ['wqeqw', Validators.required],
          startDate: ['wqeqw', Validators.required],
          endDate: ['wqeqw', Validators.required],
          about: ['wqeqw', Validators.required],
      }));
    }
    console.log(this.allFormGroup);
  }
  getEmploymentData(val): any{
    console.log((this.allFormGroup.get('employement').get('first') != null))
    switch (val){
      case 0: {
       return ((this.allFormGroup.get('employement').get('first') != null) ? true : false);
      }
      case 1: {
      return  ((this.allFormGroup.get('employement').get('first') != null) ? true : false);
      }
      case 2: {
       return ((this.allFormGroup.get('employement').get('second') != null) ? true : false);
      }
    }
  }
}
