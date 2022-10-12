import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadshboardComponent } from './dadshboard.component';

describe('DadshboardComponent', () => {
  let component: DadshboardComponent;
  let fixture: ComponentFixture<DadshboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadshboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadshboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
