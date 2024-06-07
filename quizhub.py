from flask import Flask, request

app = Flask(__name__)

const fs = require('fs');
const readline = require('readline');

const filePath = '/Users/koharuhato/Documents/QuizletImport.py';
let inputElements = [];
let answerElements = [];

const readFile = async () => {
  const file = await fs.promises.readFile(filePath, 'utf8');
  const lines = file.split('\n');

  for (const line of lines) {
    const [input, answer] = line.split('\t');
    inputElements.push(input);
    answerElements.push(answer.replace('\n', ''));
  }
};

const askName = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter your name: ', (name) => {
      rl.close();
      resolve(name);
    });
  });
};

const askReadiness = () => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Are you ready to take this quiz? ', (ready) => {
      rl.close();
      resolve(ready);
    });
  });
};

const runQuiz = async () => {
  await readFile();
  const name = await askName();
  const ready = await askReadiness();

  console.log('Get ready, there\'s 18 questions . . .');

  let totalScore = 0;

  for (let number = 0; number < 18; number++) {
    console.log(`Question #${number}`);
    let answered = false;

    for (let i = 0; i < inputElements.length; i++) {
      const userAnswer = await new Promise((resolve) => {
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });

        rl.question(`${inputElements[i]}: `, (answer) => {
          rl.close();
          resolve(answer);
        });
      });

      if (userAnswer.toUpperCase() === answerElements[i].toUpperCase()) {
        console.log('Correct +1', answerElements[i]);
        totalScore++;
      } else {
        console.log('Incorrect +0', answerElements[i]);
      }
    }

    answered = true;
    console.log('Total Score:', totalScore);
    const percentage = (totalScore / 80) * 100;
    console.log('Your final percentage is:', percentage.toFixed(2), '%');
  }

  console.log('Press Enter to continue . . .');
};

runQuiz();

