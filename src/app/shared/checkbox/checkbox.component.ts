import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() id = '';
  @Input() checked = false;
  @Output() selectionChange = new EventEmitter<string>();

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.selectionChange.emit(this.id);
    }
  }
}
