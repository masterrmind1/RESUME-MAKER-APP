import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { ChooseTemplateComponent } from './choose-template/choose-template.component';
import { StepperComponent } from './create-resume/stepper/stepper.component';
import { ViewerComponent } from './create-resume/viewer/viewer.component';
import {StringConcatPipe} from './create-resume/pipes/stringConcatPipe';


import {MatStepperModule} from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    CreateResumeComponent,
    ChooseTemplateComponent,
    StepperComponent,
    ViewerComponent,
    StringConcatPipe
  ],
  imports: [
    BrowserModule, MatExpansionModule,
    AppRoutingModule, FormsModule, MatIconModule,
    BrowserAnimationsModule, MatFormFieldModule, MatButtonModule,
    MatStepperModule, FlexLayoutModule, MatInputModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
