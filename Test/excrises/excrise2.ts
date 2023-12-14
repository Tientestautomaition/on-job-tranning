import * as readlineSync from 'readline-sync';

function calculateGrade(score: number): string {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

const userScoreString: string = readlineSync.question('Enter score:');
const userScore: number = parseFloat(userScoreString) || 0;
const grade: string = calculateGrade(userScore);
console.log(`Thành tích học tập: ${grade}`);