import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrintReceiptComponent } from './print-receipt/print-receipt.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: PrintReceiptComponent },
  { path: 'receipt/:id', component: PrintReceiptComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 