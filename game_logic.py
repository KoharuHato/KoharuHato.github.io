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
