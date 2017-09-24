import { Component } from '@angular/core';
import { DataService } from "./dataservices/data.service"; 
import 'rxjs/add/operator/map'

class Item {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gpa: string;
}

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
    service: DataService;

    constructor(private svc: DataService) {
        this.service = svc;
    }

    getItems() {
        this.service.get().map(res => res.json()).subscribe(i => this.items = i);
    }

    ngOnInit() {
        this.getItems();
    }

    submitForm(formObj) {
        //Having CORS issues where Preflight is sent and headers match but a failure is still reported 
        //(despite the record being created). Refreshing the page is the workaround. Would need further time to investigate.
        this.service.insert(formObj.value);
        //this.getItems();
    }
}
