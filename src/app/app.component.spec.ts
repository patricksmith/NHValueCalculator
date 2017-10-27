import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent, AppResultsComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppResultsComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have patientValue as 300`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.patientValue).toEqual(300);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#money').textContent).toEqual('$78,000');
    expect(compiled.querySelector('#time').textContent).toEqual('21 Months');
    expect(compiled.querySelector('#patients').textContent).toEqual('260 Patients');

    app.patientValue = 500;
    fixture.detectChanges();

    expect(compiled.querySelector('#money').textContent).toEqual('$130,000');
    expect(compiled.querySelector('#time').textContent).toEqual('21 Months');
    expect(compiled.querySelector('#patients').textContent).toEqual('260 Patients');
  }));
});
