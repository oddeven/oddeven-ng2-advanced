import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'ngc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() list: any[];
  @Output() onCreateItem: EventEmitter<any[]> = new EventEmitter();
  @Output() onClearList: EventEmitter<any> = new EventEmitter();
  @Output() onRemoveItem: EventEmitter<number> = new EventEmitter();
  @ViewChild('createInput') createInput: ElementRef;

  clearList() {
    this.onClearList.emit();
  }

  removeItem(index: number) {
    this.onRemoveItem.emit(index);
  }

  createItem() {
    this.onCreateItem.emit(this.createInput.nativeElement.value);
    this.createInput.nativeElement.value = '';
  }
}
