import { TestBed } from '@angular/core/testing';
import { RoomFormComponent } from './room-form.component';

describe('RoomFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomFormComponent]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RoomFormComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});

