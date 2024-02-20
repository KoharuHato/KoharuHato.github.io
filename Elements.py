import re
import sympy
import pandas as pd
import colorama
from termcolor import colored

# Initialize colorama for cross - platform ANSI color support
colorama.init()

# ANSI escape codes for colors
GREEN = '\033[32m'
RED_ON_WHITE = '\033[107;31m'
RESET = '\033[0m'

file_path = "/Users/koharuhato/Documents/AnswerList.py"
with open(file_path, 'r') as file:
    # Read each line in the file
    lines = file.readlines()

    # Extract the first column (element names)
    input_elements = [line.split('\t')[0] for line in lines]
    answer_elements = [line.split('\t')[1].replace("\n", "") for line in lines]

# Greetings
name = input("What is your name: ")
ready = input("Are you ready to take The Periodic Table Quiz? ")
print("Get ready, theres 80 questions . . .")

# Start Score
total_score = 0

# Question Number
for number in range(1,81):
    print("Question #" + str(number))

    # Start answered variable
    answered = False

    for element, answer in zip(input_elements, answer_elements):
        #Get user input for answer
        user_answer = input(f"{element}: ")

        # Check if user answer is correct or not
        if user_answer.upper() == answer.upper():
            print(GREEN + "Correct +1" + RESET)     # Correct answer
            total_score += 1    # Adds to the total score
        else:
            print(RED_ON_WHITE + f"Incorrect +0. Correct answer: {answer}" + RESET)     # Incorrect Answer
                
    # Set answered True after user has answered the question
    answered = True

    # Print final score after each set of questions
    print("Total Score:", total_score)
    a = float(80)
    b = float(total_score)
    percentage = b / a * 100
    print("Your percentage is:", percentage, "%")

# End of the quiz
print("Congratulations, " + name + "you have completed the quiz!")
print("Final Total Score:", total_score)
input("Press Enter to continue . . .")
