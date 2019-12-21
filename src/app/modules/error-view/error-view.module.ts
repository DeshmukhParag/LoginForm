import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ErrorViewComponent } from './components/error-view/error-view.component';

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot(),
  ],
  declarations: [ErrorViewComponent],
  exports: [ErrorViewComponent]
})
export class ErrorViewModule { }
