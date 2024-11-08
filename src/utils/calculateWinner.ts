const calculateWinner = (squares: Array<string | null>): string | null => {
 
    const lines = [
        [0, 1, 2], //horizontal
        [3, 4, 5], //horizontal
        [6, 7, 8], //horizontal
        [0, 3, 6], //vertical
        [1, 4, 7], //vertical
        [2, 5, 8], //vertical 
        [0, 4, 8], //diagonal
        [2, 4, 6], //diagnoal
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default calculateWinner;