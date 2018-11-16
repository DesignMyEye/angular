import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casavcp',
  templateUrl: './casavcp.component.html',
  styleUrls: ['./casavcp.component.scss']
})
export class CasavcpComponent implements OnInit {
    data : Date = new Date();

    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    dropdownList1 = [];
    selectedItems1 = [];
    dropdownSettings1 = {};

    constructor() { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('buy-product');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        navbar.classList.add('bg-danger');

        this.dropdownList = [
                              {"id":1,"itemName":"Semanal"},
                              {"id":2,"itemName":"Mensual"},
                              {"id":3,"itemName":"Temporal"}
                            ];
        this.selectedItems = [
            {"id":1,"itemName":"Semanal"}
        ];
        this.dropdownSettings = {
                                  singleSelection: true,
                                  text:"Select language",
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
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('buy-product');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        navbar.classList.remove('bg-danger');
    }
}
