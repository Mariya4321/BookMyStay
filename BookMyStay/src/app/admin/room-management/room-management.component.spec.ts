import { TestBed } from '@angular/core/testing';
import { RoomManagementComponent } from './room-management.component';

describe('RoomManagementComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomManagementComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RoomManagementComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

