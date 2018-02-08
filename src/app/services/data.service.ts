import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    public getGitHubData(): any[]{
        return [{
            title: 'Json and File Server (jfs.js)',
            tooltip: 'Nodejs, es6, babel',
            href: 'https://github.com/AndersDeath/jfs.js'
        }, {
            title: 'Yandex Maps Route Example (es6)',
            tooltip: 'HTML5, es6, babel, Yandex Maps Api',
            href: 'https://github.com/AndersDeath/YandexMapsRouteExample'
        }, {
            title: 'Заготовка для angular-material проекта ',
            tooltip: 'HTML5, CSS3/Sass, Angularjs, Pug, Gulp, Angular Material',
            href: 'https://github.com/AndersDeath/CleanAngularMaterialProject'
        }, {
            title: 'Automobilist (Автомобилист) версия 0.0.1 (суровая альфа)',
            tooltip: 'HTML5, Sass, Angular 5, Ionic 2, Cordova',
            href: 'https://github.com/AndersDeath/automobilist-ionic2'
        }, {
            title: 'owl.php',
            tooltip: 'PHP',
            href: 'https://github.com/AndersDeath/owl.php'
        }, {
            title: 'randomnumber-ionic2',
            tooltip: 'HTML5, Sass, Angular 5, Ionic 2, Cordova',
            href: 'https://github.com/AndersDeath/randomnumber-ionic2 '
        }, {
            title: 'chaoticcrane',
            tooltip: 'HTML5, jQuery, Konvajs, Canvas',
            href: 'https://github.com/AndersDeath/chaoticcrane '
        },{
            title: 'Сайт на котором вы сейчас находитесь',
            tooltip:'HTML 5, SASS, Angular 5, Bootstrap 4',
            href:'https://github.com/AndersDeath/MyVizitCard.git'
        }];
    }

    public getMobileList() : any[]{
        return [{
            ico: 'randomidea.webp',
            title: 'Чем заняться? Идеи!',
            tooltip: 'HTML5, Sass, Angular 5, Ionic 2, Cordova',
            href: 'https://play.google.com/store/apps/details?id=com.vnbstudio.randomidea'
          }, {
            ico: 'hardcoredots.webp',
            title: 'HardCore Dots',
            tooltip: 'HTML5, CSS3, Backbone.js, jQuery, Cordova',
            href: 'https://play.google.com/store/apps/details?id=com.vnbstudio.hardcoredots'
          }, {
            ico: 'hokkutanka.webp',
            title: 'Хокку и Танка',
            tooltip: 'HTML5, CSS3, Backbone.js, jQuery, Cordova',
            href: 'https://play.google.com/store/apps/details?id=com.vnbstudio.randomhokkutanka'
          }, {
            ico: 'passwordgenerator.webp',
            title: 'Генератор Паролей',
            tooltip: 'HTML5, CSS3, Backbone.js, jQuery, Cordova',
            href: 'https://play.google.com/store/apps/details?id=com.vnbstudio.passwordgenerator'
          }, {
            ico: 'randomquotes.webp',
            title: 'Цитаты. Случайные цитаты.',
            tooltip: 'HTML5, CSS3, Backbone.js, jQuery, Cordova',
            href: 'https://play.google.com/store/apps/details?id=com.vnbstudio.randomquote'
          }, {
            ico: 'circlekill.webp',
            title: 'Circle Kill',
            tooltip: 'HTML5, CSS3, Backbone.js, jQuery, Cordova',
            href: 'https://play.google.com/store/apps/details?id=com.vnbstudio.circlekill'
          }];
    }

    public getSiteList(): any[] {
        return [{
            title: 'VNBStudio.ru',
            tooltip: 'CodeIgniter, MySql, Backbonejs, Angular 5, CSS3, HTML5, PHP',
            href: 'http://vnbstudio.ru'
        }, {
            title: 'muzfly.ru',
            tooltip: 'CSS3, HTML5, PHP, MySQL',
            href: 'http://muzfly.ru'
        }, {
            title: 'randompage.ru',
            tooltip: 'CSS3, HTML5, PHP, MySQL, CodeIgnter',
            href: 'http://randompage.ru'
        }, {
            title: 'Сайт писателя',
            tooltip: 'WordPress',
            href: 'http://kseniyabodhi.ru/',
        }, {
            title: 'Мой Блог',
            tooltip: 'WordPress',
            href: 'http://andersdeath.ru/'
        }];
    }

}
