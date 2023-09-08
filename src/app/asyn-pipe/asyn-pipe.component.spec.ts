import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynPipeComponent } from './asyn-pipe.component';

describe('AsynPipeComponent', () => {
  let component: AsynPipeComponent;
  let fixture: ComponentFixture<AsynPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
