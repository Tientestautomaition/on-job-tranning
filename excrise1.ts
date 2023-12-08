import * as readlineSync from 'readline-sync';

function kiemTraChanLe(number: number): string {
    if (number % 2 === 0) {
        return 'Đây là số chẵn.';
    } else {
        return 'Đây là số lẻ.';
    }
}

const input: string = readlineSync.question('Enter number: ');

const number: number = parseInt(input);

if (!isNaN(number)) {
    const result: string = kiemTraChanLe(number);
    console.log(result);
} else {
    console.log('Vui lòng nhập một số hợp lệ.');
}

