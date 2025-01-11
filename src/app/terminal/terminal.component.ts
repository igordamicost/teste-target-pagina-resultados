import { Component, Input } from '@angular/core';

@Component({
selector: 'app-terminal-component',
templateUrl: './terminal.component.html',
styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent  {
@Input() questao?: string;

}
