import { TestBed } from '@angular/core/testing';
import { ConfirmDialogComponent } from './confirm-dialog.component';

describe('ConfirmDialogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDialogComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConfirmDialogComponent);
    fixture.componentInstance.message = 'Are you sure?';
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

