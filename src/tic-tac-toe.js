class TicTacToe {
    constructor() {
        this.matrix = [];
        for (var i = 0; i < 3; i++)
        {
            this.matrix[i] = [];
            for (var j = 0; j < 3; j++)
            {
                this.matrix[i][j] = null;
            }
        }
        this.currentPlayerSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {

        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol == 'x') {
                this.currentPlayerSymbol = 'o';
            }
            else {
                this.currentPlayerSymbol = 'x';
            }
        }

        for (let i = 0, j = 0; i < 3; i++) {

            if (this.matrix[i][j] === this.matrix[i][j + 1] && this.matrix[i][j] === this.matrix[i][j + 2]) {
                if (this.matrix[i][j] === 'x' || this.matrix[i][j] === 'o') {
                    this.winner = this.matrix[i][j];

                }
            }
        }

        for (let i = 0, j = 0; j < 3; j++) {
            if (this.matrix[i][j] === this.matrix[i + 1][j] && this.matrix[i][j] === this.matrix[i + 2][j]) {
                if (this.matrix[i][j] === 'x' || this.matrix[i][j] === 'o') {
                    this.winner = this.matrix[i][j];

                }
            }
        }
        let i = 0, j = 0;

        if (this.matrix[i][j] === this.matrix[i + 1][j + 1] && this.matrix[i][j] === this.matrix[i + 2][j + 2]) {
            if (this.matrix[i][j] === 'x' || this.matrix[i][j] === 'o') {
                this.winner = this.matrix[i][j];

            }
        }

        i = 0, j = 2;

        if (this.matrix[i][j] === this.matrix[i + 1][j - 1] && this.matrix[i][j] === this.matrix[i + 2][j - 2]) {
            if (this.matrix[i][j] === 'x' || this.matrix[i][j] === 'o') {
                this.winner = this.matrix[i][j];

            }
        }

    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        }
        else {
            return false;
        }
        
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        let count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (!this.matrix[i][j]) {
                    count++;
                }
            }
        }
        if (count) {
            return false;
        }
        else {
            return true;
        }
        
    }

    isDraw() {
        if (this.noMoreTurns() && !this.winner) {
            return true;
        }
        else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
