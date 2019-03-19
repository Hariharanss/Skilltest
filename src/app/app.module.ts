import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorComponent } from '../errorhandler/global-error.component';
import { PageNotFoundComponent } from '../errorhandler/page-not-found.component';
import { GlobalErrorHandlerService } from '../errorhandler/global-error-handler.service';


@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
