import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemViewchildTempletComponent } from './them-viewchild-templet.component';

describe('ThemViewchildTempletComponent', () => {
  let component: ThemViewchildTempletComponent;
  let fixture: ComponentFixture<ThemViewchildTempletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemViewchildTempletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemViewchildTempletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
