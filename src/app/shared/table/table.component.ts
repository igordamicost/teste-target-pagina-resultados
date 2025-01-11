import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { TableColumn } from "src/interface/global-table.interface";

// src/app/shared/table/table.component.ts
@Component({
  selector: 'app-table',
  template: `
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8 table">
      <ng-container *ngFor="let column of columns" [matColumnDef]="column.field">
        <th mat-header-cell *matHeaderCellDef>{{ column.header }}</th>
        <td mat-cell *matCellDef="let element">
          <!-- Aplicar a pipe apenas ao campo percentual -->
          <ng-container *ngIf="column.field === 'percentual'; else defaultContent">
            {{ element[column.field] | percentual }}
          </ng-container>
          <ng-template #defaultContent>
            {{ element[column.field] }}
          </ng-template>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnChanges {
  @Input() data: T[] = [];
  @Input() columns: TableColumn<T>[] = [];

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<T>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource.data = this.data || [];
    }
    if (changes['columns']) {
      this.displayedColumns = this.columns.map((col) => col.field);
    }
  }
}
