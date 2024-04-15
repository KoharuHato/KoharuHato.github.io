from flask import Flask, request

app = Flask(__name__)

import re
import sympy
import pandas as pd

file_path = "https://github.com/KoharuHato/KoharuHato.github.io/blob/ccc98424cd9a998cc32b50de27626bd3fe38922c/QuizletImport.py"
with open(file_path, 'r') as file:
    # Read each line in the file
    lines = file.readlines()

    # Extract the first column
    input_elements = [line.split('\t')[0] for line in lines]
    answer_elements = [line.split('\t')[1].replace("\n", "") for line in lines]


#for i in range(0, len(input_elements)):
#    print(input_elements[i])
#
#
#for i in range(0, len(answer_elements)):
#    print(answer_elements[i])
    

# Greetings
name = input("Enter your name: ")
ready = input("Are you ready to take this quiz? ")
print("Get ready, theres 18 questions . . . ")

# Start Score
total_score = 0

# Question Number
for number in range(0, 18):
    print("Question #" + str(number))

    # Start answered variable
    answered = False

    for element, answer in zip(input_elements, answer_elements):
        # Get uesr input for answer
        user_answer = input(f"{element}: ")

        # Check if user answer is correct or not
        if user_answer.upper() == answer.upper():
                print("Correct +1", answer)
                total_score += 1 # Adds to total score
        else:
            print("Incorrect +0", answer)

    # Set answered True after user has answered the question
    answered = True

    # Print final score after each set of questions
    print("Total Score:", total_score)
    a = float(80)
    b = float(total_score)
    percentage = b / a * 100
    print("Your final percentage is:", percentage, "%")

# End of quiz
print("Press Enter to continue . . . ")

if __name__ == '__main__':
    app.run(debug=True)
