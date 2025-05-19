// **Optional: Find Mode**

// - ให้เขียน Function ที่ชื่อว่า `findMode` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `arr` เป็น Array ของตัวเลข
//     - Function นี้จะ Return ค่า เลขที่ปรากฏบ่อยที่สุด (mode) ใน Array
//         - ถ้ามีมากกว่า 1 ตัวที่ถี่ที่สุด ให้ return ตัวที่เจอก่อนใน Array

const findMode = (arr: number[]): number => {
  const modeCount: { [key: number]: { count: number; index: number } } = {};
  let maxCount: number = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (modeCount[num]) {
      modeCount[num].count++;
    } else {
      modeCount[num] = { count: 1, index: i };
    }
    maxCount = Math.max(maxCount, modeCount[num].count);
  }

  const filtered = Object.entries(modeCount).filter(
    ([_, num]) => num.count === maxCount
  );

  if (filtered.length > 1) {
    return Number(filtered.sort((a, b) => a[1].index - b[1].index)[0][0]);
  } else {
    return Number(filtered[0][0]);
  }
};

let w15o1a1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(w15o1a1); // 3

let w15o1a2 = findMode([7, 7, 1, 1, 7]);
console.log(w15o1a2); // 7

let w15o1a3 = findMode([7, 7, 1, 1, 7, 1]);
console.log(w15o1a3); // 7
