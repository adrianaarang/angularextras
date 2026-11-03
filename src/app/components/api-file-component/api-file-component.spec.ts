import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiFilesComponent } from './api-file-component';

describe('ApiFileComponent', () => {
  let component: ApiFilesComponent;
  let fixture: ComponentFixture<ApiFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiFilesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiFilesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
