import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Antd';
  size: NzButtonSize = 'large';

  allChecked = false;
  indeterminate = true;
  todos = [
    { title: 'todo1', completed: 'false', checked: false },
    { title: 'todo2', completed: 'false', checked: false },
    { title: 'todo3', completed: 'true', checked: false }
  ];

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.todos = this.todos.map(item => ({
        ...item,
        checked: true
      }));
    } else {
      this.todos = this.todos.map(item => ({
        ...item,
        checked: false
      }));
    }
  }

  updateSingleChecked(): void {
    if (this.todos.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.todos.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

  cancel(): void {
    alert('click cancel');
  }

  confirm(): void {
    alert('click confirm');
  }

}
