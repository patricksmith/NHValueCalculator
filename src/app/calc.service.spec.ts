import { async } from '@angular/core/testing';
import { CalcService } from './calc.service';

describe('CalcService', () => {
  const calcService = new CalcService(5, 36);
  const validPatientValue = 300;
  const validStartingPatients = 10;
  const validDesiredPatients = 30;
  const validGrowthRate = 1;

  it('ensure patientValue is between 100 and 10,000', async(() => {
    expect(() => calcService.compute(
      0, validStartingPatients, validDesiredPatients, validGrowthRate))
    .toThrowError('InvalidPatientValue - Must be between 100 - 10000');
  }));

  it('ensure startingPatients is lower than desiredPatients', async(() => {
    expect(() => calcService.compute(
      validPatientValue, 10, 5, validGrowthRate))
    .toThrowError('You must want more patients than you have currently!');
  }));

  it('ensure startingPatients are in a valid range', async(() => {
    expect(() => calcService.compute(
      validPatientValue, -1, validDesiredPatients, validGrowthRate))
    .toThrowError('You must be starting with a positive number of patients');
  }));

  it('ensure desiredPatients are in a valid range', async(() => {
    expect(() => calcService.compute(
      validPatientValue, validStartingPatients, 2, validGrowthRate))
    .toThrowError('You must be hoping for at least 5 patients / week');
  }));

  it('ensure the practice is not currently contracting.', async(() => {
    expect(() => calcService.compute(
      validPatientValue, validStartingPatients, validDesiredPatients, -1))
    .toThrowError('If you\'re losing customers, you need to fix that before my service can help you');
  }));

  it('should compute money, patients, and time properly', async(() => {
    // 0 organic growth will arbitrarily be set to 60 months (5yrs) saved
    expect(calcService.compute(100, 10, 30, 0))
      .toEqual({
        money: 67000,
        patients: 670,
        time: 60
      });

    expect(calcService.compute(100, 5, 20, 3))
      .toEqual({
        money: 2300,
        patients: 23,
        time: 3
      });
  }));
});
