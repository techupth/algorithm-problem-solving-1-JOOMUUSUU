function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0, j = numbers.length - 1; i < j; ) {
    let sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
}
