import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IGX_DIALOG_DIRECTIVES } from 'igniteui-angular';
import { View1Component } from './view-1.component';

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View1Component, NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective, IGX_DIALOG_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(View1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
