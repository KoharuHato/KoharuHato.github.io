<!DOCTYPE python>
<html lang = "en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/3/w3.css">

<!-- Navigation -->
<nav class="w3-bar w3-grey">
    <a href="index.html" class="w3-button w3-bar-item">Home</a>
    <a href="practice.html" class="w3-button w3-bar-item">Practice</a>
    <a href="productivity.html" class="w3-button w3-bar-item">Productivity</a>
    <a href="motivation.py" class="w3-button w3-bar-item">Motivation</a>
    <a href="habits.html" class="w3-button w3-bar-item">Habit Tracker</a>
    <a href="aboutme.html" class="w3-button w3-bar-item">About Me</a>
</nav>

<!-- Title -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elements</title>

import re
import sympy
import pandas as pd

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
            print("Correct +1")     # Correct answer
            total_score += 1    # Adds to the total score
        else:
            print(f"Incorrect +0. Correct answer: {answer}")     # Incorrect Answer
                
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
