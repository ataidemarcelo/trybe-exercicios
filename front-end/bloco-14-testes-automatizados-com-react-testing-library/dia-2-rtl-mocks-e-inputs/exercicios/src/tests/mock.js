export const func1 = (num) => {
  console.log('func1', num);
  func2();
  return `func1: ${num}`;
}

export const func2 = (num) => {
  console.log('func2', num);
  return `func2: ${num}`;
}

export const func3 = (num) => {
  console.log('func3', num);
  return `func3: ${num}`;
}
