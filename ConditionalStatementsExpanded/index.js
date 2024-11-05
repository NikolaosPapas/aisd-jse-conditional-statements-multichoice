// Full example using `if`, `else if`, and `else` statements
let grade = 85; // Grade out of 100

if (grade >= 90) {
  console.log("Excellent! You got an A."); // Expected output: (This will not print because the condition is false)
} else if (grade >= 80) {
  console.log("Good job! You got a B."); // Expected output: "Good job! You got a B."
} else if (grade >= 70) {
  console.log("You passed with a C."); // Expected output: (This will not print because an `else if` is true)
} else if (grade >= 60) {
  console.log("You passed with a D."); // Expected output: (This will not print because an `else if` is true)
} else {
  console.log("You didn't pass this time. Keep trying!"); // Expected output: (This will not print because an `else if` is true)
}