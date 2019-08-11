class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

[
    'EOF',
    'LAMBDA',
    'LPAREN',
    'RPAREN',
    'IDENTIFIER',
    'DOT'
].forEach(token => Token[token] = token);

module.exports = Token;