import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosTileComponent } from './logos-tile.component';

describe('LogosTileComponent', () => {
  let component: LogosTileComponent;
  let fixture: ComponentFixture<LogosTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogosTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogosTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
