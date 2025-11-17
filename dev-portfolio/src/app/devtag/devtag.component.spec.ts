import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevtagComponent } from './devtag.component';

describe('DevtagComponent', () => {
  let component: DevtagComponent;
  let fixture: ComponentFixture<DevtagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevtagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
