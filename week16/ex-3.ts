// **Exercise 3: Group and Calculate Numbers**

// - ให้เขียน Function ที่ชื่อว่า `sumByType` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `numbers` เป็น Array ที่บรรจุตัวเลขจำนวนเต็ม
//     - Function นี้จะ Return ค่าเป็น Object ที่มีโครงสร้างดังนี้

//         ```jsx
//         {
//            even: ผลคูณของเลขคู่ทั้งหมด (ยกเว้น 0),
//            odd: ผลรวมของเลขคี่ทั้งหมด,
//            zero: จำนวนเลขศูนย์ทั้งหมดที่พบ
//         }
//         ```

//         - ต้องแยก 0 ออกจากเลขคู่เสมอ
//         - หากไม่เจอเลขคู่เลย ให้ return 1

const groupAndCalculate = (
  numbers: number[]
): { even: number; odd: number; zero: number } => {
  const result = {
    even: 1,
    odd: 0,
    zero: 0,
  };

  for (let num of numbers) {
    if (num === 0) result.zero++
    else if (num % 2 === 0) result.even *= num
    else result.odd += num
  }

  return result
};

let w16e3a1 = groupAndCalculate([0, 2, 3, 0, 4, 5]);
console.log(w16e3a1); // { even: 8, odd: 8, zero: 2 }

let w16e3a2 = groupAndCalculate([0, 0, 1, 3, 5]);
console.log(w16e3a2); // { even: 1, odd: 9, zero: 2 }

let w16e3a3 = groupAndCalculate([2, 4, 6]);
console.log(w16e3a3); // { even: 48, odd: 0, zero: 0 }
