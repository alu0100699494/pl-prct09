/* description: Parses end executes mathematical expressions. */

%{
// Sin funciones
%}

%token NUMBER ID EOF PROCEDURE CALL CONST VAR BEGIN END WHILE DO ODD IF THEN ELSE
/* operator associations and precedence */

%right THEN ELSE
%right '='
%left '+' '-'
%left '*' '/'
%left UMINUS

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
		
		if($$.length > 0)
		  $$ = [$$];
		
		if($4)
		  $$ = $$.concat($4);
	  }
	;
	
  block_const
      : CONST ID '=' NUMBER block_const_ids SEMICOLON
	    {
	      $$ = [{ type: $1, id: $2, value: $4 }];
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
		$$ = [{ type: $1, value: $2 }];
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
		  $$ = [{type: $1, id: $2, block: $4}];
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
	    $$ = {type: $2, left: $1, right: $3};
	  }
	| CALL ID
	  {
	    $$ = {type: $1, id: $2};
	  }
	| BEGIN statement statement_begin_st END
	  {
	    $$ = {type: $1, value: [$2].concat($3)};
	  }
	| IF condition THEN statement
	  {
	    $$ = {type: $1, condition: $2, statement: $4};
	  }
	| IF condition THEN statement ELSE statement
	  {
	    $$ = {type: "IFELSE", condition: $2, statement_true: $4, statement_false: $6};
	  }
	| WHILE condition DO statement
	  {
	    $$ = {type: $1, condition: $2, statement: $4};
	  }
	| /* empty */
	  {
	    $$ = [];
	  }
	;
	
  statement_begin_st
      : SEMICOLON statement statement_begin_st
	    {
		  // Posibles problemas de compatibilidad con IE < 9
		  aux = $2;
		  if(Object.keys(aux).length == 0)
		    $$ = [];
		  else
		    $$ = [$2];
			
		  if($3) $$ = $$.concat($3)
		}
	  | /* empty */
	    {
		  $$ = [];
		}
	  ;
	
condition
    : ODD expression
	  {
	    $$ = {type: $1, value: $2};
	  }
	| expression COMPARISON expression
	  {
	    $$ = {type: $2, left: $1, right: $3};
	  }
	;
	
expression
    : expression '+' expression
	  {
	    $$ = {type: $2, left: $1, right: $3};
	  }
	| expression '-' expression
	  {
	    $$ = {type: $2, left: $1, right: $3};
	  }
	| expression '*' expression
	  {
	    $$ = {type: $2, left: $1, right: $3};
	  }
	| expression '/' expression
	  {
	    $$ = {type: $2, left: $1, right: $3};
	  }
	| '-' expression %prec UMINUS
	  {
	    $$ = {type: $1, value: $2};
	  }
	| '(' expression ')'
	  {
	    $$ = $2;
	  }
	| ID
	| NUMBER
	;