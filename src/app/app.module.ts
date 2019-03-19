import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@Injectable()
export class ErrorLogService {
    private name = 'ErrorLogService';

    logError(error: any) {
      const date = new Date().toISOString();
      if (error instanceof HttpErrorResponse) {
        console.error(date, 'There was an HTTP error.', error.message, 'Status code:', (error as HttpErrorResponse).status);
      } else if (error instanceof TypeError) {
        console.error(date, 'There was a Type error.', error.message);
      } else if (error instanceof Error) {
        console.error(date, 'There was a general error.', error.message);
      } else {
        console.error(date, 'Nobody threw an Error but something happened!', error);
      }
    }
}

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
    constructor(private errorLogService: ErrorLogService) {
        super();
    }

    handleError(error) {
        this.errorLogService.logError(error);
    }
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalErrorHandler, ErrorLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
