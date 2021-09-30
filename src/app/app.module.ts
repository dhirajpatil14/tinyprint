import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintReceiptComponent } from './print-receipt/print-receipt.component';
import { ErrorComponent } from './error/error.component';
import { PrintReceiptService } from './shared/print-receipt.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PrintReceiptComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [PrintReceiptComponent],
  providers: [PrintReceiptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
