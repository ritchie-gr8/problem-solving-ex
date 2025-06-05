// ### Exercises

// **Exercise 1: Find Common Elements**

// - ให้เขียน Function ที่ชื่อว่า `findCommon` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 2 ตัวคือ `arr1` และ `arr2` เป็น Array ที่บรรจุตัวเลข
//     - Function นี้จะ Return ค่าเป็น Array ที่มีเฉพาะตัวเลขที่ปรากฏอยู่ใน `arr1` และ `arr2`

const findCommon = (arr1: number[], arr2: number[]): number[] => {
  const map: Record<number, number> = {}

  const addToMap = (val: number) => {
    if (map[val]) map[val]++
    else map[val] = 1
  }

  const merged = [...arr1, ...arr2]
  for (let num of merged) addToMap(num)

  const result = Object.entries(map).filter(([_, count]) => count > 1).map(([num, _]) => Number(num))
  return result
}

let w17e1a1 = findCommon([1, 2, 3], [2, 3, 4]);
console.log(w17e1a1); // [2, 3]

let w17e1a2 = findCommon([5, 6], [7, 8]);
console.log(w17e1a2); // []
