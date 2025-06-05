// **Optional: Find Longest Word**

// - ให้เขียน Function ที่ชื่อว่า `findLongestWord` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น String
//     - Function นี้จะ Return ค่าเป็นคำที่มีความยาวมากที่สุดในประโยค วัดจากจำนวนตัวอักษรในแต่ละคำ
//         - ถ้ามีคำที่ยาวที่สุดมากกว่า 1 คำ ให้ return คำแรกที่เจอก่อน

const findLongestWord = (text: string): string => {
  const words: string[] = text.split(" ")
  return words.reduce((longest: string, word: string) => {
    if (word.length > longest.length) longest = word
    return longest
  })
}

let result1: string = findLongestWord("I love programming very much");
console.log(result1); // "programming"

let result2: string = findLongestWord("TechUp helps people switch careers");
console.log(result2); // "careers"
