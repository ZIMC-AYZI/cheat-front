import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyDetailsPageComponent } from './technology-details-page.component';

describe('TechnologyDetailsPageComponent', () => {
  let component: TechnologyDetailsPageComponent;
  let fixture: ComponentFixture<TechnologyDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologyDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
