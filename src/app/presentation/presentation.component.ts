import { Component, OnInit, OnDestroy, HostListener, ElementRef} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';  
import swal from 'sweetalert2'; 
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'; 


@Component({
    selector: 'app-presentation',
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent implements OnInit, OnDestroy {
    closeResult: string; 
    zoom: number = 14;
    lat: number = -31.4235279;
    lng: number = -64.4995099;
    styles: any[] = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    model = {
        left: true,
        middle: false,
        right: false
    };  

    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    dropdownList1 = [];
    selectedItems1 = [];
    dropdownSettings1 = {};


     constructor(public el: ElementRef , public MessageService: MessageService, private modalService: NgbModal) { }
    
    
    
     @HostListener('window:scroll', ['$event'])
     checkScroll() {
        const componentPosition = document.getElementsByClassName('add-animation');
        const scrollPosition = window.pageYOffset;
        
        for(var i = 0; i < componentPosition.length; i++) {
            var rec = componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
            if ( scrollPosition + window.innerHeight >= rec ) {
                componentPosition[i].classList.add('animated');
            } else if ( scrollPosition + window.innerHeight * 0.8 < rec ) {
                componentPosition[i].classList.remove('animated');
            }
        }
     }
    ngOnInit() {
        
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('presentation-page');
        body.classList.add('loading');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

        this.dropdownList = [
            {"id":1,"itemName":"Semanal"},
            {"id":2,"itemName":"Mensual"},
            {"id":3,"itemName":"Temporal"}
          ];
this.selectedItems = [
{"id":1,"itemName":"1 Semana"}
];
this.dropdownSettings = {
                singleSelection: true,
                text:"Selecicone",
                selectAllText:'Select All',
                unSelectAllText:'UnSelect All',
                enableSearchFilter: true,
                classes:""
              };
this.dropdownList1 = [
            {"id":1,"itemName":"Efectivo"},
            {"id":2,"itemName":"Debito"},
            {"id":3,"itemName":"Credito"}
          ];
this.selectedItems1 = [
{"id":1,"itemName":"Efectivo"},
];
this.dropdownSettings1 = {
                singleSelection: true,
                text:"Select currency",
                selectAllText:'Select All',
                unSelectAllText:'UnSelect All',
                enableSearchFilter: true,
                classes:""
              };
}
onItemSelect(item:any){
console.log(item);
console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
console.log(item);
console.log(this.selectedItems);
}
onSelectAll(items: any){
console.log(items);
}
onDeSelectAll(items: any){
console.log(items);
}
    contactForm(form) {
        this.MessageService.sendMessage(form).subscribe(() => {
   
        });
            swal("Registro Exitoso","Gracias por Comunicarse en DME, su Consulta se envió correctamente, en instantes nos pondremos en contacto con Ud.",'success');
  
      }
      
      
      open(content, type) {
        if (type === 'sm') {
            console.log('aici');
            this.modalService.open(content, { size: 'sm' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else {
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }
  
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('presentation-page');
        body.classList.remove('loading');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
}
