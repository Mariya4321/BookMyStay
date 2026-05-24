import { TestBed } from '@angular/core/testing';
import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSpinnerComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LoadingSpinnerComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

