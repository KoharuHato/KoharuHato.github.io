<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Announcement Header -->
        <header class="announcement-header">
            <div class="announcement-text">
                <p>Important Announcement: Our website is undergoing maintenance. We apologize for any inconvenience</p>
            </div>
        </header>

        <!-- Navigation -->
        <nav class="w3-bar" style="background-color: #E5CEDA;">
            <a href="index.html" class="w3-button w3-bar-item">Home</a>
            <a href="calculator.html" class="w3-button w3-bar-item">Calculator</a>
            <a href="practice.html" class="w3-button w3-bar-item">Practice</a>
            <a href="productivity.html" class="w3-button w3-bar-item">Productivity</a>
            <a href="motivation.py" class="w3-button w3-bar-item">Motivation</a>
            <a href="habits.html" class="w3-button w3-bar-item">Habit Tracker</a>
            <a href="aboutme.html" class="w3-button w3-bar-item">About Me</a>
            <a href="tictactoe.html" class="w3-button w3-bar-item">Tic Tac Toe</a>
        </nav>

      
<!-- Tic Tac Toe Game Content -->
class TicTacToe:
    def __init__(self):
        self.board = [' '] * 9
        self.current_player = 'X'

    def print_board(self):
        for i in range(0, 9, 3):
            print(' | '.join(self.board[i:i + 3]))
            if i < 6:
                print('-' * 9)

    def make_move(self, position):
        if self.board[position] == ' ':
            self.board[position] = self.current_player
            if self.check_winner():
                print(f"Player {self.current_player} wins!")
                return True
            elif ' ' not in self.board:
                print("It's a draw!")
                return True
            else:
                self.current_player = 'O' if self.current_player == 'X' else 'X'
        else:
            print("Invalid move. Please try again.")
        return False

    def check_winner(self):
        lines = [(0, 1, 2), (3, 4, 5), (6, 7, 8),
                 (0, 3, 6), (1, 4, 7), (2, 5, 8),
                 (0, 4, 8), (2, 4, 6)]

        for line in lines:
            if self.board[line[0]] == self.board[line[1]] == self.board[line[2]] != ' ':
                return True
        return False

        </div>
    </div>
</body>
</html>
