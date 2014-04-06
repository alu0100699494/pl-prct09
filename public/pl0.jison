/* description: Parses end executes mathematical expressions. */

%{
var symbol_table = {};

var vars_stack = [];
var block_header_stack = [];

function fact (n) { 
  return n==0 ? 1 : fact(n-1) * n 
}
%}

%token NUMBER ID E PI EOF PROCEDURE CALL CONST VAR BEGIN END WHILE DO ODD IF THEN ELSE
/* operator associations and precedence */

%right '='
%left '+' '-'
%left '*' '/'
%left '^'
%right '%'
%left UMINUS
%left '!'

%start program

%% /* language grammar */
program
    : block DOT EOF
	  {
	    header = block_header_stack.pop();
		
	    return header;
	  }
    ;
	
block
    : CONST ID '=' NUMBER (block_const_ids) SEMICOLON
	  {
	    aux_concat = vars_stack;
		console.log(aux_concat.length);
		vars_stack = [];
		
		block_header_stack.push( [{ type: "CONST", id: $2, value: $4 }].concat(aux_concat) );
	  }
	| /* empty */
	;
	
  block_const_ids
      : COMMA ID '=' NUMBER block_const_ids
	    {
		   vars_stack.push({ type: "CONST", id: $2, value: $4 });
		}
	  | /* empty */
	  ;

expressions
    : s  
        { $$ = (typeof $1 === 'undefined')? [] : [ $1 ]; }
    | expressions ';' s
        { $$ = $1;
          if ($3) $$.push($3); 
          console.log($$);
        }
    ;

s
    : /* empty */
    | e
    ;

e
    : ID '=' e
        { symbol_table[$1] = $$ = $3; }
    | PI '=' e 
        { throw new Error("Can't assign to constant 'π'"); }
    | E '=' e 
        { throw new Error("Can't assign to math constant 'e'"); }
    | e '+' e
        {$$ = $1+$3;}
    | e '-' e
        {$$ = $1-$3;}
    | e '*' e
        {$$ = $1*$3;}
    | e '/' e
        {
          if ($3 == 0) throw new Error("Division by zero, error!");
          $$ = $1/$3;
        }
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | e '!'
        {
          if ($1 % 1 !== 0) 
             throw "Error! Attempt to compute the factorial of "+
                   "a floating point number "+$1;
          $$ = fact($1);
        }
    | e '%'
        {$$ = $1/100;}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    | ID 
        { $$ = symbol_table[yytext] || 0; }
    ;

