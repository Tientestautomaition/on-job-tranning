function generateRandomArray(length: number): number[] {
    const randomArray: number[] = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * 100)); // Giả sử mảng chứa số ngẫu nhiên từ 0 đến 99
    }
    return randomArray;
}

function findSecondLargest(arr: number[]): number {
    const uniqueArray: number[] = Array.from(new Set(arr)); // Loại bỏ các phần tử trùng nhau
    const sortedUniqueArray: number[] = uniqueArray.sort((a, b) => b - a); // Sắp xếp mảng giảm dần
    return sortedUniqueArray[1]; // Trả về số lớn thứ 2 trong mảng
}

const randomArray: number[] = generateRandomArray(50);
console.log("Mảng ngẫu nhiên:", randomArray);
const secondLargest: number = findSecondLargest(randomArray);
console.log("Số lớn thứ 2 trong mảng:", secondLargest);