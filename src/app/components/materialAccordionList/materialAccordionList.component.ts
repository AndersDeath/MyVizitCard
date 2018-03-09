import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { PathService } from '../../services/path.service';

@Component({
  selector: 'app-material-accordion-list',
  templateUrl: './materialAccordionList.component.html',
  styleUrls: ['./materialAccordionList.component.sass']
})

export class MaterialAccordionListComponent {
  @Input() items: object;
  @Input() title: string;
  url: string;
  constructor(public path: PathService) {
      this.url = this.path.getStorage();
  }
  ngOnInit(): void {
  }

  goTo(href) {
    window.open(href, '_blank');
  }
}
