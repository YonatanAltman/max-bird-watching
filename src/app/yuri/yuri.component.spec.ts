import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuriComponent } from './yuri.component';

describe('YuriComponent', () => {
  let component: YuriComponent;
  let fixture: ComponentFixture<YuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YuriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
