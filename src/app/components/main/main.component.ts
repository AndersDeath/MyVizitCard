import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

  gitHubData: any[];
  mobileList: any[];
  siteList: any[];

  constructor(private data: DataService) {

  }
  ngOnInit(): void {
    this.gitHubData = this.data.getGitHubData();
    this.mobileList = this.data.getMobileList();
    this.siteList = this.data.getSiteList();
  }
  goTo(href) {
    window.open(href, '_blank');
  }
}
