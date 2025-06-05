// **Exercise 2: Remove Duplicates**

// - ให้เขียน Function ที่ชื่อว่า `removeDuplicates` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `arr` ซึ่งเป็น Array ที่บรรจุตัวเลข
//     - Function นี้จะ Return ค่าเป็น Array ใหม่ ที่มีเพียงตัวเลขที่ไม่ซ้ำกัน จาก `arr` เดิม

const removeDuplicates = (arr: number[]): number[] => {
  const set = new Set(arr)
  return Array.from(set)
}

let w17e2a1 = removeDuplicates([1, 2, 2, 3, 3, 3]);
console.log(w17e2a1); // [1, 2, 3]

let w17e2a2 = removeDuplicates([5, 5, 5, 5]);
console.log(w17e2a2); // [5]
