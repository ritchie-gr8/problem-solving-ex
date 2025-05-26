// **Exercise 1: Capitalize First Letter**

// - ให้เขียน Function ที่ชื่อว่า `capitalizeWords` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `sentence` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่า String ที่มีการเปลี่ยนให้ตัวอักษรแรกของทุกคำในประโยคเป็นตัวพิมพ์ใหญ่

const capitalizeWords = (sentence: string): string => {
  const words: string[] = sentence.split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

let w16e1a1 = capitalizeWords("hello world");
console.log(w16e1a1); // "Hello World"

let w16e1a2 = capitalizeWords("techup career prep");
console.log(w16e1a2); // "Techup Career Prep"
