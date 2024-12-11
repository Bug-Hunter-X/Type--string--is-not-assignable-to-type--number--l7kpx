# TypeScript Type Error: String in Number Array

This repository demonstrates a common type error in TypeScript: attempting to add a string value to a number array. The TypeScript compiler will correctly flag this as an error, preventing runtime issues.  The example shows how to use type guards or type assertions to fix the problem if the string can be converted to a number.

## Bug
The `bug.ts` file contains code that attempts to push a string into a number array. This causes a type error.  This is expected and correct behavior.

## Solution
The `bugSolution.ts` file shows one way to mitigate the type error if we need flexibility.  Note that there is still a risk of runtime errors if conversion fails. More robust error handling would be ideal in a production setting.