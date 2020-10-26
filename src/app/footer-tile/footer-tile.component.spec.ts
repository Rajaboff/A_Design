import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTileComponent } from './footer-tile.component';

describe('FooterTileComponent', () => {
  let component: FooterTileComponent;
  let fixture: ComponentFixture<FooterTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
