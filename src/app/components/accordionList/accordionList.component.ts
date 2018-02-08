import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-accordion-list',
    templateUrl: './accordionList.component.html',
    styleUrls: ['./accordionList.component.sass']
})

export class AccordionListComponent {
    @Input() items: object;
    @Input() title: string;
    constructor() {

    }
    ngOnInit(): void {
    }

    goTo(href) {
        window.open(href, '_blank');
    }
}
