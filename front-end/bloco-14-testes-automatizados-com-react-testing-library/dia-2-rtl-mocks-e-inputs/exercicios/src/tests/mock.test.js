import * as funcs from './mock';

// jest.mock('./mock');

describe('Funcs', () => {
  test('OK', () => {
    jest.spyOn(funcs, 'func1');
    funcs.func1(5);
    // func2(2);
    // func3(3);
    expect(funcs.func1).toHaveBeenCalledWith(5);
  });
});
