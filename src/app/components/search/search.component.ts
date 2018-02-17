import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  AlignerHeight: any;
  searchValue: string;
  searchToggle: string = 'yandexSearch';
  searchHistory: any;
  constructor(private data: DataService) {

  }
  ngOnInit(): void {
    this.setAlignerHeight();
    this.searchValue = '';
    window.addEventListener("resize", () => {
      this.setAlignerHeight();
    });
    document.addEventListener('keyup', event => {
      if (event.keyCode == 13) {
        this.startSearch();
      }
    });
    this.data.getSearchHistory().subscribe(res => {
      this.searchHistory = res;
      this.searchHistory = this.searchHistory.slice(0,10);
    });
  }
  startSearch() {
    let typeId;
    if (this.searchToggle === "yandexSearch") {
      window.open('https://yandex.ru/search/?text=' + this.searchValue, '_blank');
      typeId = "2";
    }
    if (this.searchToggle === "googleSearch") {
      window.open('https://www.google.ru/#newwindow=1&q=' + this.searchValue, '_blank');
      typeId = "1";
    }
    this.data.setSearchHistory(this.searchValue, typeId).subscribe(res => console.log(res))
    this.searchValue = '';
    return;
  }
  searchFromHistory(text,type){
    if (type === "yandex") {
      window.open('https://yandex.ru/search/?text=' + text, '_blank');
    }
    if (type === "google") {
      window.open('https://www.google.ru/#newwindow=1&q=' + text, '_blank');
    }
    return;
  }
  setAlignerHeight() {
    this.AlignerHeight = window.innerHeight - 120;
  }
}
