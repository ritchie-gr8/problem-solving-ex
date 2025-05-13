// **Exercise 1: Is Even Number**

// - ให้เขียน Function ที่ชื่อว่า `isEvenNumber` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `num` มี Value Type เป็น `Number`
//     - Function นี้จะ Return ค่าออกมาดังนี้
//         - ถ้า `num` เป็นเลขคู่ ให้ return `true`
//         - ถ้าไม่ใช่ ให้ return `false`

const isEvenNumber = (num: number): boolean => num % 2 === 0

console.log(isEvenNumber(2))
console.log(isEvenNumber(3))
