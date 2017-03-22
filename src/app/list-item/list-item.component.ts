import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'ngc-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
  @Input() item: any;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();

  remove() {
    this.onRemove.emit();
  }
}
