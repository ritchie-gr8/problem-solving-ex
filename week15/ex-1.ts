// **Exercise 1: Count Vowels**

// - ให้เขียน Function ที่ชื่อว่า `countVowels` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่าเป็นจำนวนสระภาษาอังกฤษ (a, e, i, o, u) ที่ปรากฏใน `text`
//         - โดยนับทั้งตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

const countVowels = (text: string): number => {
  const vowels: string = 'aeiou'
  const lowered: string = text.toLowerCase()

  let count: number = 0
  for (let char of lowered) {
    if (vowels.includes(char)) count++
  }

  return count
}

let w15e1a1 = countVowels("hello");
console.log(w15e1a1); // 2

let w15e1a2 = countVowels("TECHUP");
console.log(w15e1a2); // 2
