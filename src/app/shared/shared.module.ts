
import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TableComponent } from './table/table.component';
import { PercentualPipe } from 'src/util/pipe';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


import { DialogComponent } from './modal/dialog.component';

@NgModule({
    
 declarations: [
    DialogComponent,CheckboxComponent,TableComponent,PercentualPipe ],
    imports: [CommonModule,MatTableModule],
    providers: [],
    exports: [CheckboxComponent,TableComponent,PercentualPipe ]
})
export class SharedModule { }
