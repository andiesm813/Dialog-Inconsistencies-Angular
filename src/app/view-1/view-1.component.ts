import { Component } from '@angular/core';
import { IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-view-1',
  imports: [IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective],
  templateUrl: './view-1.component.html',
  styleUrls: ['./view-1.component.scss']
})
export class View1Component {}
