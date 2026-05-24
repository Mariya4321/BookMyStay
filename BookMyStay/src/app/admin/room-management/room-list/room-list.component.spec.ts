import { TestBed } from '@angular/core/testing';
import { RoomListComponent } from './room-list.component';

describe('RoomListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomListComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RoomListComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

