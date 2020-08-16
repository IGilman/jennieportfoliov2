import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopymsgComponent } from './copymsg.component';

describe('CopymsgComponent', () => {
  let component: CopymsgComponent;
  let fixture: ComponentFixture<CopymsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopymsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopymsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
