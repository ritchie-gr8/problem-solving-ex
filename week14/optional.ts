// **Optional: Palindrome Checker**

// - ให้เขียน Function ที่ชื่อว่า `isPalindrome` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `word` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่า `true` ถ้า `word` เป็น Palindrome
//     - หากไม่ใช่ ให้ Return `false`
//     - Palindrome คือคำที่อ่านจากหน้าไปหลังหรือหลังไปหน้าก็ได้คำเดียวกัน เช่น `“madam”`, `“racecar”`

const isPalindrome = (word: string): boolean => {
  let l: number = 0,
    r: number = word.length - 1;

  const char: string = "abcdefghijklmnopqrstuvwxyz";
  const lowered: string = word.toLowerCase();

  while (l < r) {
    if (!char.includes(lowered[l])) l++;
    if (!char.includes(lowered[r])) r--;
    if (lowered[l] !== lowered[r]) return false;

    l++;
    r--;
  }

  return true;
};

let result5 = isPalindrome("madam");
console.log(result5); // true

let result6 = isPalindrome("hello");
console.log(result6); // false
