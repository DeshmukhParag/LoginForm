import { ErrorViewModule } from './error-view.module';

describe('ErrorViewModule', () => {
  let errorViewModule: ErrorViewModule;

  beforeEach(() => {
    errorViewModule = new ErrorViewModule();
  });

  it('should create an instance', () => {
    expect(errorViewModule).toBeTruthy();
  });
});
