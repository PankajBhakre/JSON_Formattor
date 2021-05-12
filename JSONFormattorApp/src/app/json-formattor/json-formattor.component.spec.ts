import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFormattorComponent } from './json-formattor.component';

describe('JsonFormattorComponent', () => {
  let component: JsonFormattorComponent;
  let fixture: ComponentFixture<JsonFormattorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFormattorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonFormattorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
