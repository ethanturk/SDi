import { Component } from '@angular/core';
import { DataService } from "./dataservices/data.service"; 

interface Item {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gpa: string;
}

var isDataAvailable: boolean = false;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Input Form';
    gridtitle = 'Entered Data';
    item = {} as Item;
    items: Item[];
    private loading: boolean = false;
    private results: any;
    private service: DataService;

    constructor(private svc: DataService) {
        this.service = svc;
    }

    getItems() {
        this.service.get().then(i => this.items = i);
    }

    ngOnInit() {
        this.getItems();
    }

    submitForm(formObj) {
        this.service.insert(formObj.value)..finally(() => this.getItems());
        //this.getItems();
    }
}
