# lambda.js

## Syntax (represented in BNF)

- Non-Terminal

    Term => Application | LAMBDA IDENTIFIER DOT Term

    Application => Atom Application'

    Application' => Atom Application' | ε

    Atom => LPAREN Term RPAREN | IDENTIFIER

<br/>

- Terminal

    LPAREN => '('

    RPAREN => ')'

    LAMBDA => '\\'

    DOT => '.'

    IDENTIFIER => /[a-zA-Z]+/
