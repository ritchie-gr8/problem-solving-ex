// **Exercise 3: Find Max Number**

// - ให้เขียน Function ที่ชื่อว่า `findMax` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `nums` มี Value Type เป็น Array ที่บรรจุตัวเลขจำนวนเต็ม
//     - Function นี้จะ Return ค่าเป็น ตัวเลขที่มากที่สุด ใน Array นั้น

const findMax = (nums: number[]): number => {
  if (nums.length === 0) return -1

  let max: number = -Infinity
  for (let num of nums) {
    max = Math.max(max, num)
  }
  return max
}

let result3 = findMax([1, 9, 3, 5]);
console.log(result3); // 9

let result4 = findMax([-10, -5, -2]);
console.log(result4); // -2
