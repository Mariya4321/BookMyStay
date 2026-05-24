import { TestBed } from '@angular/core/testing';
import { BranchManagementComponent } from './branch-management.component';

describe('BranchManagementComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchManagementComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BranchManagementComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

