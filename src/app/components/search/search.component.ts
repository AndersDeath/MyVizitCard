import { Component } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  AlignerHeight: any;
  searchValue: string;
  searchToggle: string = 'yandexSearch';
  last10Requests: any[];
  constructor() {

  }
  ngOnInit(): void {
    this.setAlignerHeight();
    window.addEventListener("resize", () => {
      this.setAlignerHeight();
    });
    document.addEventListener('keyup', event => {
      if (event.keyCode == 13) {
        this.startSearch();
      }
    });

  }
  startSearch() {
    if (this.searchToggle === "yandexSearch") {
      window.open('https://yandex.ru/search/?text=' + this.searchValue, '_blank');
    }
    if (this.searchToggle === "googleSearch") {
      window.open('https://www.google.ru/#newwindow=1&q=' + this.searchValue, '_blank');
    }
    this.searchValue = '';
    return;
  }
  search(text) {
    window.open('https://yandex.ru/search/?text=Что такое ' + text + '? Технология. Википедия', '_blank');
  }
  setAlignerHeight() {
    this.AlignerHeight = window.innerHeight - 120;
  }
}
