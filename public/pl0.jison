/* description: Parses end executes mathematical expressions. */

%{
var symbol_table = {};

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
	    return $1;
	  }
    ;

block
    : block_const block_vars block_procs statement
	  {
	    $$ = [];
		
		if($1) $$ = $$.concat($1);
		if($2) $$ = $$.concat($2);
		if($3) $$ = $$.concat($3);
		if($$.length > 0) $$ = [$$];
		if($4) $$ = $$.concat($4);
	  }
	;
	
  block_const
      : CONST ID '=' NUMBER block_const_ids SEMICOLON
	    {
	      $$ = [{ type: "CONST", id: $2, value: $4 }];
		  if($5) $$ = $$.concat($5);
	    }
	  | /* empty */
	    {
	      $$ = [];
	    }
	  ;  
	
  block_const_ids
      : COMMA ID '=' NUMBER block_const_ids
	    {
		  $$ = [{ type: "CONST", id: $2, value: $4 }];
		  if($5) $$ = $$.concat($5);
		}
	  | /* empty */
	  {
	    $$ = [];
	  }
	  ;
	  
  block_vars
      : VAR ID block_vars_id SEMICOLON
	  {		
		$$ = [{ type: "VAR", value: $2 }];
		if($3) $$ = $$.concat($3);
	  }
	  | /* empty */
	    {
		  $$ = [];
		}
	  ;
	  
  block_vars_id
      : COMMA ID block_vars_id
	    {
		  $$ = [{ type: "VAR", value: $2 }];
		  if($3) $$ = $$.concat($3);
		}
	  | /* empty */
	    {
		  $$ = [];
		}
	  ;


  block_procs
      : PROCEDURE ID SEMICOLON block SEMICOLON block_procs
	    {
		  $$ = [{type: "PROCEDURE", id: $2, block: $4}];
		  if($6) $$ = $$.concat($6);
		}
	  | /* empty */
	    {
		  $$ = [];
		}
	  ;
	  

statement
    : ID '=' expression
	  {
	    $$ = {type: '=', left: $1, rigth: $3};
	  }
	| /* empty */
	  {
	    $$ = [];
	  }
	;
	
expression
    : NUMBER /* test */
	  {
	    $$ = $1;
	  }
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

