import { Component, OnInit } from '@angular/core';
import { DataService } from "./dataservices/data.service"; 

interface Item {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gpa: string;
}

@Component({
    selector: 'data-grid',
    templateUrl: './data-grid.html',
    styleUrls: ['./data-grid.css']
})

export class DataGrid implements OnInit {
    title = 'Data Grid';
    items: Item[];
    private service: DataService;
    
    constructor(private svc: DataService) {
        this.service = svc;
        //this.getItems();
    }

    getItems() {
        this.service.get().then(i => this.items = i);
    }

    ngOnInit() {
        this.getItems();
    }
}
