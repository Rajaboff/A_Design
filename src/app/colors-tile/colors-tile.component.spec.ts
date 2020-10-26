import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsTileComponent } from './colors-tile.component';

describe('ColorsTileComponent', () => {
  let component: ColorsTileComponent;
  let fixture: ComponentFixture<ColorsTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
