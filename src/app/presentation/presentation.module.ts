import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http'; 
import { NouisliderModule } from 'ng2-nouislider';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PresentationComponent } from './presentation.component';
import { MessageService } from '../services/message.service';

@NgModule({
    imports: [
        CommonModule,
        NgbModule, 
        RouterModule, 
        BrowserModule,
        BrowserAnimationsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDDiFks8J7Zrgil-mRAQRDXvAh5WnF3NfA'
        }), 
        HttpClientModule, 
        ReactiveFormsModule, 
        NouisliderModule,
        FormsModule,
        AngularMultiSelectModule
    ],
    declarations: [ PresentationComponent ],
    exports:[ PresentationComponent ],
    providers: [MessageService]
})
export class PresentationModule { }
