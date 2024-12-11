function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

let arr1: number[] = [1, 2, 3];

//Using a type assertion to mitigate the type error. But this is risky if '4' is not a number.
let num = "4" as unknown as number;

arr1.push(num);

// Safer way to add elements to the array.  Checking type first.
function pushSafe(arr:number[], val: any){ 
  if(typeof val === 'number'){ 
      arr.push(val);
  }else{ 
      console.warn(`Value ${val} is not a number and cannot be pushed into the array`);
  }
}

pushSafe(arr1, 5);
pushSafe(arr1, "string");

let arr2: number[] = [4, 5, 6];
let combinedArray: number[] = combine(arr1, arr2); 