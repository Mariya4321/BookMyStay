import { TestBed } from '@angular/core/testing';
import { CustomerDashboardComponent } from './customer-dashboard.component';

describe('CustomerDashboardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDashboardComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CustomerDashboardComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

