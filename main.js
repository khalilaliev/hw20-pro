/// Task 1 ///

const array = [2, "hello", 4, 55, 9, null, NaN, 23, 1, "World", 7];

const arithmeticValueOfNumber = (arr) => {
  const numbers = arr.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (numbers.length > 0) {
    return numbers.reduce((a, b) => a + b) / numbers.length;
  }
  return 0;
};

const arithmeticResult = arithmeticValueOfNumber(array);
console.log("arithmeticResult:", parseFloat(arithmeticResult.toFixed(2)));

/// Task 2 ///

const numberX = parseFloat(prompt("Enter a first number:"));
const numberY = parseFloat(prompt("Enter a second number:"));
const operation = prompt("Enter an operation:");

const doMath = (x, operation, y) => {
  let result;
  switch (operation) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    case "%":
      result = x % y;
      break;
    case "^":
      result = x ** y;
      break;
    default:
      result = "You have written smth wrong!";
  }
  return result;
};

const mathResult = doMath(numberX, operation, numberY);
console.log("mathResult:", mathResult);

/// Task 3 ///

const dynamicArr = () => {
  const arr = [];
  for (let i = 0; ; i++) {
    const innerArr = [];
    const arrEl = prompt("Enter elements of ARRAY:");
    if (arrEl === null || arrEl === "") {
      break;
    }
    innerArr.push(arrEl);
    for (let j = 0; ; j++) {
      const arrSecondEl = prompt("Enter second elements of ARRAY:");
      if (arrSecondEl === null || arrSecondEl === "") {
        break;
      }
      innerArr.push(arrSecondEl);
    }
    arr.push(innerArr);
  }
  return arr;
};
const dynamicArrResult = dynamicArr();
console.log("dynamicArrResult:", dynamicArrResult);

/// Task 4 ///

const removingLett = (str, letters) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!letters.includes(char)) {
      newStr += char;
    }
  }
  return newStr;
};
console.log(removingLett("Hello world!", ["l", "w"]));

// const removingLett = (str, letters) => {
//   const splitted = str.split("");
//   const result = splitted.filter((char) => {
//     return !letters.includes(char);
//   });
//   return result.join("");
// };
// console.log(removingLett("Hello world!", ["l", "w"]));
