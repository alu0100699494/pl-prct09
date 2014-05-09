/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var pl0 = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"reset":4,"block":5,"DOT":6,"EOF":7,"block_const":8,"block_vars":9,"block_procs":10,"statement":11,"CONST":12,"ID":13,"=":14,"NUMBER":15,"block_const_ids":16,"SEMICOLON":17,"COMMA":18,"VAR":19,"block_vars_id":20,"PROCEDURE":21,"functionname":22,"block_procs_parameters":23,"(":24,"block_procs_parameters_ids":25,")":26,"expression":27,"CALL":28,"statement_call_arguments":29,"BEGIN":30,"statement_begin_st":31,"END":32,"IF":33,"condition":34,"THEN":35,"ELSE":36,"WHILE":37,"DO":38,"statement_call_arguments_ids":39,"ODD":40,"COMPARISON":41,"+":42,"-":43,"*":44,"/":45,"$accept":0,"$end":1},
terminals_: {2:"error",6:"DOT",7:"EOF",12:"CONST",13:"ID",14:"=",15:"NUMBER",17:"SEMICOLON",18:"COMMA",19:"VAR",21:"PROCEDURE",24:"(",26:")",28:"CALL",30:"BEGIN",32:"END",33:"IF",35:"THEN",36:"ELSE",37:"WHILE",38:"DO",40:"ODD",41:"COMPARISON",42:"+",43:"-",44:"*",45:"/"},
productions_: [0,[3,4],[4,0],[5,4],[8,6],[8,0],[16,5],[16,0],[9,4],[9,0],[20,3],[20,0],[10,6],[10,0],[22,2],[23,5],[23,2],[23,0],[25,4],[25,0],[11,3],[11,3],[11,4],[11,4],[11,6],[11,4],[11,0],[29,4],[29,4],[29,2],[29,0],[39,3],[39,3],[39,0],[31,3],[31,0],[34,2],[34,3],[27,3],[27,3],[27,3],[27,3],[27,2],[27,3],[27,1],[27,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
	    return [{symboltable: symbolsToString()}].concat($$[$0-2]);
	  
break;
case 2:
      // Reiniciar programa.
      reset();
    
break;
case 3:
	    this.$ = [];
		
		if($$[$0-1]) this.$ = this.$.concat($$[$0-1])
		
		if(this.$.length > 0)
		  this.$ = [this.$];
		
		if($$[$0])
		  this.$ = this.$.concat($$[$0]);
	  
break;
case 4:
        if (symbolTable.vars[$$[$0-4]]) 
          throw new Error("Constante "+$$[$0-4]+" ya definida.");
	      symbolTable.vars[$$[$0-4]] = { type: "CONST", value: $$[$0-2] }
	      this.$ = [{ type: $$[$0-5], id: $$[$0-4], value: $$[$0-2] }];
		    if($$[$0-1]) this.$ = this.$.concat($$[$0-1]);
	    
break;
case 5:
	      this.$ = [];
	    
break;
case 6:
        if (symbolTable.vars[$$[$0-3]]) 
          throw new Error("Constante "+$$[$0-3]+" ya definida.");

		    symbolTable.vars[$$[$0-3]] = { type: "CONST", value: $$[$0-1] }
		    this.$ = [{ type: "CONST", id: $$[$0-3], value: $$[$0-1] }];
		    if($$[$0]) this.$ = this.$.concat($$[$0]);
	  	
break;
case 7:
	    this.$ = [];
	  
break;
case 8:
        if (symbolTable.vars[$$[$0-2]]) 
          throw new Error("Variable "+$$[$0-2]+" ya definida.");
		    symbolTable.vars[$$[$0-2]] = { type: "VAR", value: "" }
		    this.$ = [{ type: $$[$0-3], value: $$[$0-2] }];
		    if($$[$0-1]) this.$ = this.$.concat($$[$0-1]);
	    
break;
case 9:
		  this.$ = [];
		
break;
case 10:
          if (symbolTable.vars[$$[$0-1]]) 
            throw new Error("Variable "+$$[$0-1]+" ya definida.");
          symbolTable.vars[$$[$0-1]] = { type: "VAR", value: "" }
          this.$ = [{ type: "VAR", value: $$[$0-1] }];
          if($$[$0]) this.$ = this.$.concat($$[$0]);
        
break;
case 11:
          this.$ = [];
        
break;
case 12:
          this.$ = [{type: $$[$0-5], id: $$[$0-4].id, parameters: $$[$0-4].parameters, block: $$[$0-2], symboltable: symbolsToString()}];
          getFormerScope();

          if($$[$0]) this.$ = this.$.concat($$[$0]);
        
break;
case 13:
		    this.$ = [];
		  
break;
case 14:
        if (symbolTable.vars[$$[$0-1]]) 
          throw new Error("Función "+$$[$0-1]+" ya definido.");
        symbolTable.vars[$$[$0-1]] = { type: "PROCEDURE", name: $$[$0-1], value: $$[$0].length }; // Contar parámetros en "numparameters"
        makeNewScope($$[$0-1]);
        
        // Asociar los parámetros al ámbito actual.
        $$[$0].forEach(function(p) {
          // Guardar parámetro
          console.log(p.value);
          if (symbolTable.vars[p.value]) 
            throw new Error("Identificador " + p.value + " ya definido.");
            
          symbolTable.vars[p.value] = { type: "PARAM", value: "" };
        });

        this.$ = {id: $$[$0-1], parameters: $$[$0]};
      
break;
case 15:
          this.$ = [{type: 'ID', value: $$[$0-2]}].concat($$[$0-1]);
        
break;
case 16:
          this.$ = [];
        
break;
case 17:
          this.$ = [];
        
break;
case 18:
		      this.$ = [{type: 'ID', value: $$[$0-1]}].concat($$[$0]);
		    
break;
case 19:
		      this.$ = [];
		    
break;
case 20:
        var info = findSymbol($$[$0-2]);
        var s = info[1];
        info = info[0];

        if (info && info.type === "VAR") { 
          this.$ = {type: $$[$0-1], left: {id: $$[$0-2], declared_in: symbolTables[s].name }, right: $$[$0]};
        }
        else if (info && info.type === "PARAM") { //Parametro 
          this.$ = {type: $$[$0-1], left: {id: $$[$0-2], declared_in: symbolTables[s].name }, right: $$[$0] /*, declared_in: symbolTables[s].name */}; // ¿?
        }
        else if (info && info.type === "CONST") { 
           throw new Error("Symbol "+$$[$0-2]+" refers to a constant");
        }
        else if (info && info.type === "PROCEDURE") { 
           throw new Error("Symbol "+$$[$0-2]+" refers to a function");
        }
        else { 
           throw new Error("Symbol "+$$[$0-2]+" not declared");
        }
	    
break;
case 21:
	    var info = findSymbol($$[$0-1]);
      var s = info[1];
      info = info[0];


      if (info && info.type === "VAR") { 
        throw new Error("Symbol "+$$[$0-1]+" refers to a variable");
      }
      else if (info && info.type === "PARAM") { //Parametro 
         throw new Error("Symbol "+$$[$0-1]+" refers to a parameter");
      }
      else if (info && info.type === "CONST") { 
         throw new Error("Symbol "+$$[$0-1]+" refers to a constant");
      }
      else if (info && info.type === "PROCEDURE" && info.value == $$[$0].length) { 
         this.$ = {type: $$[$0-2], id: $$[$0-1], arguments: $$[$0]};
      }
      else if(info && info.type === "PROCEDURE") {
        throw new Error("Numero de argumentos invalido para " + $$[$0-1] + "(" + $$[$0].length + " de " + info.value + ")");
      }
      else { 
         throw new Error("Symbol "+$$[$0-1]+" not declared");
      }

	  
break;
case 22:
	    this.$ = {type: $$[$0-3], value: [$$[$0-2]].concat($$[$0-1])};
	  
break;
case 23:
	    this.$ = {type: $$[$0-3], condition: $$[$0-2], statement: $$[$0]};
	  
break;
case 24:
	    this.$ = {type: "IFELSE", condition: $$[$0-4], statement_true: $$[$0-2], statement_false: $$[$0]};
	  
break;
case 25:
	    this.$ = {type: $$[$0-3], condition: $$[$0-2], statement: $$[$0]};
	  
break;
case 26:
	    this.$ = [];
	  
break;
case 27:
          // Comprobar que existe el identificador, y que no sea un id de PROCEDURE
          var info = findSymbol($$[$0-2]);
          var s = info[1];
          info = info[0];

          if (info && info.type === "PROCEDURE") { 
            throw new Error("Symbol "+$$[$0-2]+" refers to a procedure identifier.");
          }
          else if(info) {
            this.$ = [{type: 'ID', value: $$[$0-2]}].concat($$[$0-1]);
          }
          else { 
             throw new Error("Symbol "+$$[$0-2]+" not declared");
	        }
        
break;
case 28:
          this.$ = [{type: 'NUMBER', value: $$[$0-2]}].concat($$[$0-1]);
        
break;
case 29:
          this.$ = [];
        
break;
case 30:
          this.$ = [];
        
break;
case 31:
          // Comprobar que existe el identificador, y que no sea un id de PROCEDURE
          var info = findSymbol($$[$0-1]);
          var s = info[1];
          info = info[0];

          if (info && info.type === "PROCEDURE") { 
            throw new Error("Symbol "+$$[$0-1]+" refers to a procedure identifier.");
          }
          else if(info) {
            this.$ = [{type: 'ID', value: $$[$0-1]}].concat($$[$0]);
          }
          else { 
             throw new Error("Symbol "+$$[$0-1]+" not declared.");
	        }
        
break;
case 32:
          this.$ = [{type: 'NUMBER', value: $$[$0-1]}].concat($$[$0]);
        
break;
case 33:
          this.$ = [];
        
break;
case 34:
		  // Posibles problemas de compatibilidad con IE < 9
		  aux = $$[$0-1];
		  if(Object.keys(aux).length == 0)
		    this.$ = [];
		  else
		    this.$ = [$$[$0-1]];
			
		  if($$[$0]) this.$ = this.$.concat($$[$0])
		
break;
case 35:
		  this.$ = [];
		
break;
case 36:
	    this.$ = {type: $$[$0-1], value: $$[$0]};
	  
break;
case 37:
	    this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0]};
	  
break;
case 38:
	    this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0]};
	  
break;
case 39:
	    this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0]};
	  
break;
case 40:
	    this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0]};
	  
break;
case 41:
	    this.$ = {type: $$[$0-1], left: $$[$0-2], right: $$[$0]};
	  
break;
case 42:
	    this.$ = {type: $$[$0-1], value: $$[$0]};
	  
break;
case 43:
	    this.$ = $$[$0-1];
	  
break;
case 44:
      // Comprobar si existe
      var info = findSymbol($$[$0]);
      var s = info[1];
      info = info[0];

      if (info && info.type === "PROCEDURE")
        throw new Error("Symbol "+$$[$0]+" refers to a procedure");
      else if (info)
      {
        this.$ = { id: $$[$0], declared_in: symbolTables[s].name };
      }
      else
        throw new Error("Symbol "+$$[$0]+" not declared");
    
break;
}
},
table: [{3:1,4:2,6:[2,2],12:[2,2],13:[2,2],19:[2,2],21:[2,2],28:[2,2],30:[2,2],33:[2,2],37:[2,2]},{1:[3]},{5:3,6:[2,5],8:4,12:[1,5],13:[2,5],19:[2,5],21:[2,5],28:[2,5],30:[2,5],33:[2,5],37:[2,5]},{6:[1,6]},{6:[2,9],9:7,13:[2,9],17:[2,9],19:[1,8],21:[2,9],28:[2,9],30:[2,9],33:[2,9],37:[2,9]},{13:[1,9]},{7:[1,10]},{6:[2,13],10:11,13:[2,13],17:[2,13],21:[1,12],28:[2,13],30:[2,13],33:[2,13],37:[2,13]},{13:[1,13]},{14:[1,14]},{1:[2,1]},{6:[2,26],11:15,13:[1,16],17:[2,26],28:[1,17],30:[1,18],33:[1,19],37:[1,20]},{13:[1,22],22:21},{17:[2,11],18:[1,24],20:23},{15:[1,25]},{6:[2,3],17:[2,3]},{14:[1,26]},{13:[1,27]},{11:28,13:[1,16],17:[2,26],28:[1,17],30:[1,18],32:[2,26],33:[1,19],37:[1,20]},{13:[1,34],15:[1,35],24:[1,33],27:31,34:29,40:[1,30],43:[1,32]},{13:[1,34],15:[1,35],24:[1,33],27:31,34:36,40:[1,30],43:[1,32]},{17:[1,37]},{17:[2,17],23:38,24:[1,39]},{17:[1,40]},{13:[1,41]},{16:42,17:[2,7],18:[1,43]},{13:[1,34],15:[1,35],24:[1,33],27:44,43:[1,32]},{6:[2,30],17:[2,30],24:[1,46],29:45,32:[2,30],36:[2,30]},{17:[1,48],31:47,32:[2,35]},{35:[1,49]},{13:[1,34],15:[1,35],24:[1,33],27:50,43:[1,32]},{41:[1,51],42:[1,52],43:[1,53],44:[1,54],45:[1,55]},{13:[1,34],15:[1,35],24:[1,33],27:56,43:[1,32]},{13:[1,34],15:[1,35],24:[1,33],27:57,43:[1,32]},{6:[2,44],17:[2,44],26:[2,44],32:[2,44],35:[2,44],36:[2,44],38:[2,44],41:[2,44],42:[2,44],43:[2,44],44:[2,44],45:[2,44]},{6:[2,45],17:[2,45],26:[2,45],32:[2,45],35:[2,45],36:[2,45],38:[2,45],41:[2,45],42:[2,45],43:[2,45],44:[2,45],45:[2,45]},{38:[1,58]},{5:59,8:4,12:[1,5],13:[2,5],17:[2,5],19:[2,5],21:[2,5],28:[2,5],30:[2,5],33:[2,5],37:[2,5]},{17:[2,14]},{19:[1,60],26:[1,61]},{6:[2,8],13:[2,8],17:[2,8],21:[2,8],28:[2,8],30:[2,8],33:[2,8],37:[2,8]},{17:[2,11],18:[1,24],20:62},{17:[1,63]},{13:[1,64]},{6:[2,20],17:[2,20],32:[2,20],36:[2,20],42:[1,52],43:[1,53],44:[1,54],45:[1,55]},{6:[2,21],17:[2,21],32:[2,21],36:[2,21]},{13:[1,65],15:[1,66],26:[1,67]},{32:[1,68]},{11:69,13:[1,16],17:[2,26],28:[1,17],30:[1,18],32:[2,26],33:[1,19],37:[1,20]},{6:[2,26],11:70,13:[1,16],17:[2,26],28:[1,17],30:[1,18],32:[2,26],33:[1,19],36:[2,26],37:[1,20]},{35:[2,36],38:[2,36],42:[1,52],43:[1,53],44:[1,54],45:[1,55]},{13:[1,34],15:[1,35],24:[1,33],27:71,43:[1,32]},{13:[1,34],15:[1,35],24:[1,33],27:72,43:[1,32]},{13:[1,34],15:[1,35],24:[1,33],27:73,43:[1,32]},{13:[1,34],15:[1,35],24:[1,33],27:74,43:[1,32]},{13:[1,34],15:[1,35],24:[1,33],27:75,43:[1,32]},{6:[2,42],17:[2,42],26:[2,42],32:[2,42],35:[2,42],36:[2,42],38:[2,42],41:[2,42],42:[2,42],43:[2,42],44:[2,42],45:[2,42]},{26:[1,76],42:[1,52],43:[1,53],44:[1,54],45:[1,55]},{6:[2,26],11:77,13:[1,16],17:[2,26],28:[1,17],30:[1,18],32:[2,26],33:[1,19],36:[2,26],37:[1,20]},{17:[1,78]},{13:[1,79]},{17:[2,16]},{17:[2,10]},{6:[2,4],13:[2,4],17:[2,4],19:[2,4],21:[2,4],28:[2,4],30:[2,4],33:[2,4],37:[2,4]},{14:[1,80]},{18:[1,82],26:[2,33],39:81},{18:[1,82],26:[2,33],39:83},{6:[2,29],17:[2,29],32:[2,29],36:[2,29]},{6:[2,22],17:[2,22],32:[2,22],36:[2,22]},{17:[1,48],31:84,32:[2,35]},{6:[2,23],17:[2,23],32:[2,23],36:[1,85]},{35:[2,37],38:[2,37],42:[1,52],43:[1,53],44:[1,54],45:[1,55]},{6:[2,38],17:[2,38],26:[2,38],32:[2,38],35:[2,38],36:[2,38],38:[2,38],41:[2,38],42:[2,38],43:[2,38],44:[1,54],45:[1,55]},{6:[2,39],17:[2,39],26:[2,39],32:[2,39],35:[2,39],36:[2,39],38:[2,39],41:[2,39],42:[2,39],43:[2,39],44:[1,54],45:[1,55]},{6:[2,40],17:[2,40],26:[2,40],32:[2,40],35:[2,40],36:[2,40],38:[2,40],41:[2,40],42:[2,40],43:[2,40],44:[2,40],45:[2,40]},{6:[2,41],17:[2,41],26:[2,41],32:[2,41],35:[2,41],36:[2,41],38:[2,41],41:[2,41],42:[2,41],43:[2,41],44:[2,41],45:[2,41]},{6:[2,43],17:[2,43],26:[2,43],32:[2,43],35:[2,43],36:[2,43],38:[2,43],41:[2,43],42:[2,43],43:[2,43],44:[2,43],45:[2,43]},{6:[2,25],17:[2,25],32:[2,25],36:[2,25]},{6:[2,13],10:86,13:[2,13],17:[2,13],21:[1,12],28:[2,13],30:[2,13],33:[2,13],37:[2,13]},{18:[1,88],25:87,26:[2,19]},{15:[1,89]},{26:[1,90]},{13:[1,91],15:[1,92]},{26:[1,93]},{32:[2,34]},{6:[2,26],11:94,13:[1,16],17:[2,26],28:[1,17],30:[1,18],32:[2,26],33:[1,19],36:[2,26],37:[1,20]},{6:[2,12],13:[2,12],17:[2,12],28:[2,12],30:[2,12],33:[2,12],37:[2,12]},{26:[1,95]},{19:[1,96]},{16:97,17:[2,7],18:[1,43]},{6:[2,27],17:[2,27],32:[2,27],36:[2,27]},{18:[1,82],26:[2,33],39:98},{18:[1,82],26:[2,33],39:99},{6:[2,28],17:[2,28],32:[2,28],36:[2,28]},{6:[2,24],17:[2,24],32:[2,24],36:[2,24]},{17:[2,15]},{13:[1,100]},{17:[2,6]},{26:[2,31]},{26:[2,32]},{18:[1,88],25:101,26:[2,19]},{26:[2,18]}],
defaultActions: {10:[2,1],38:[2,14],61:[2,16],62:[2,10],84:[2,34],95:[2,15],97:[2,6],98:[2,31],99:[2,32],101:[2,18]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

	var symbolTables = [{name: "Global", father: null, vars: {}}]; //Tabla de simbolos global
	var scope = 0;
	var symbolTable = symbolTables[scope]; //Tabla de simbolos actual

	function getScope() {
  		return scope;
	}

	function getFormerScope() {
   		scope--;
   		symbolTable = symbolTables[scope];
	}

	function makeNewScope(id) { // En cada declaracion de procedimiento poner esto
   		scope++;
      symbolTables[scope] =  { name: id, father: symbolTable, vars: {} };
   		symbolTable.vars[id].symbolTable = symbolTables[scope];
   		symbolTable = symbolTables[scope];
      
   		return symbolTable;
	}
	function findSymbol(x) {
  		var f;
  		var s = scope;
  		do {
    			f = symbolTables[s].vars[x];
    			s--;
  		} while (s >= 0 && !f);
  		s++;
  		return [f, s];
	}
  
	function symbolsToString(){
		symbols = [];
		for(var key in symbolTable.vars) {
	    symbols.push({id: key, type: symbolTable.vars[key].type, value: symbolTable.vars[key].value});
    };
		return symbols;
	}
  
	function reset(){
	  symbolTables = [{name: "Global", father: null, vars: {}}]; //Tabla de simbolos global
	  scope = 0;
	  symbolTable = symbolTables[scope]; //Tabla de simbolos actual
	}

//makenewscope = cuando entramos en un ambito
//getformerscope = cuando salimos de un ambito
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var reserved_words ={ PROCEDURE : 'PROCEDURE', CALL : 'CALL', CONST : 'CONST', VAR : 'VAR', BEGIN : 'BEGIN', END : 'END', WHILE : 'WHILE', DO : 'DO', ODD : 'ODD', IF : 'IF', THEN : 'THEN', ELSE : 'ELSE' }

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
}


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and comments */
break;
case 1:return 17
break;
case 2:return 6
break;
case 3:return 18
break;
case 4:return 41
break;
case 5:return 15
break;
case 6:return idORrw(yy_.yytext)
break;
case 7:return yy_.yytext;
break;
case 8:return 7
break;
case 9:return 'INVALID'
break;
}
},
rules: [/^(?:\s+|#.*)/,/^(?:[;])/,/^(?:\.)/,/^(?:[,])/,/^(?:(==|!=|<=|<|>=|>))/,/^(?:\b\d+(\.\d*)?([eE][-+]?\d+)?\b)/,/^(?:\b[A-Za-z_]\w*\b)/,/^(?:[-*/+^!%=();])/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = pl0;
exports.Parser = pl0.Parser;
exports.parse = function () { return pl0.parse.apply(pl0, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}