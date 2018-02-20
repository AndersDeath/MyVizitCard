
import { Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { SearchComponent } from '../components/search/search.component';
import { SitePageComponent } from '../components/sitepage/sitePage.component';

export const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'search', component: SearchComponent },
    { path: 'site', component: SitePageComponent },
    { path: '**', redirectTo: '/' }
]; 