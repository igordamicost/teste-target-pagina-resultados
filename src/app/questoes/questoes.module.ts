
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppQuestao5Component } from './questao5/app-questao5.component';
import { AppQuestao4Component } from './questao4/app-questao4.component';
import { AppQuestao3Component } from './questao3/app-questao3.component';
import { AppQuestao2Component } from './questao2/app-questao2.component';
import { AppQuestao1Component } from './questao1/app-questao1.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TerminalComponent } from '../terminal/terminal.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    AppQuestao5Component,
    AppQuestao4Component,
    AppQuestao3Component,
    AppQuestao2Component,
    AppQuestao1Component,
    TerminalComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    SharedModule
  ],
  providers: [],
  exports: [
    AppQuestao5Component,
    AppQuestao4Component,
    AppQuestao3Component,
    AppQuestao2Component,
    AppQuestao1Component
  ]
})
export class QuestoesModule { }
