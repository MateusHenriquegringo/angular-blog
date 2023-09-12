import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './page/content/content.component';
import { MainComponent } from './page/main/main.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path: 'content/:id',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
