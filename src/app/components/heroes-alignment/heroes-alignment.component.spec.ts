import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesAlignmentComponent } from './heroes-alignment.component';

describe('HeroesAlignmentComponent', () => {
  let component: HeroesAlignmentComponent;
  let fixture: ComponentFixture<HeroesAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesAlignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
