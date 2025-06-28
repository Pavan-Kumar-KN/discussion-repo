// practice Question 1: Create a Calculator Function\
// Description:
// Write a function called calculate that takes three arguments: here u said 3 arguments?

// Two numbers (a and b) but here it is 2

// A string representing an operator: "add", "subtract", "multiply", or "divide" got it

// Return the result based on the operator provided.
// calculate(4, 2, "add");      // 6
// calculate(10, 5, "divide");  // 2

// const calculates1 = (a, b, opr) => {
//     switch (opr) {
//         case 'add':
//             return a+b;
//             break;
//         case 'sub':
//             return a - b;
//             break;
//         case 'mul':
//             return a * b;
//             break;
//         case 'div':
//             return b != 0? a / b:'b value should be greater than zero';
//             break;
//         default:
//             return "Invalid operation" ;
//     }
// }
// console.log(calculates1(3, 0, "div"));



const calculates1 = (a, b, opr) => {

    if (opr === "add"){
        return a+b;
    }
else if(opr === "sub")
{
    return a-b;
    }
else if (opr === "mul"){
    return a * b;
    }
    else if (opr === "div"){
        return b!== 0? a / b: "B value should not be zero"
    }
    else{
        return "Invalid operation"
    }
    }
console.log(calculates1(3, 5, "div"));





