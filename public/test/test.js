var assert = chai.assert;

suite('Operaciones y plegado de constantes', function(){
  test('Recursividad a izquierdas', function(){
    obj = transformacion_pl0(pl0.parse("VAR a;a = 3-2-5 ."))
    assert.equal(obj[1].right, "-4") 
  });

  test('General y asignación', function(){
    obj = transformacion_pl0(pl0.parse("VAR a; a = 3 ."))
    assert.equal(obj[1].type, "=")
    assert.equal(obj[1].left.id, "a")
    assert.equal(obj[1].right, "3") 
  });

  test('Suma', function(){
    obj = transformacion_pl0(pl0.parse("VAR a; a = 2 + 3 ."))
    assert.equal(obj[1].right, "5")
  });

  test('Multiplicación', function(){
    obj = transformacion_pl0(pl0.parse("VAR a;a = 2 * 3 ."))
    assert.equal(obj[1].right, "6") 
  });

  test('División', function(){
    obj = transformacion_pl0(pl0.parse("VAR a;a = 6 / 3 ."))
    assert.equal(obj[1].right, "2")
  });

  test('Paréntesis', function(){
    obj = transformacion_pl0(pl0.parse("VAR a;a = (2+3) * 3 ."))
    assert.equal(obj[1].right, "15")
  });

  test('Precedencia', function(){
    obj = transformacion_pl0(pl0.parse("VAR a;a = 2+3*3 ."))
    assert.equal(obj[1].right, "11")
  });

  test('Comparación', function(){
    obj = transformacion_pl0(pl0.parse("VAR a,b;IF a == 3 THEN b = 2 ."))
    assert.equal(obj[1].condition.type, "==")
  });

  test('Plegado de constantes', function(){
    obj = transformacion_pl0(pl0.parse("Const a=3; Var b; b = a + 4 ."))
    assert.equal(obj[1].right, "7")
  });
});
suite('Estructuras', function(){
  test('block', function(){
    obj = transformacion_pl0(pl0.parse("CONST a = 3; VAR b; PROCEDURE p; b = a + 3; CALL p."))
    assert.equal(obj[0].symboltable[0].type, "CONST")
    assert.equal(obj[0].symboltable[1].type, "VAR")
    assert.equal(obj[1][0].type, "PROCEDURE")
    assert.equal(obj[2].type, "CALL")
  });

  test('CALL', function(){
    obj = transformacion_pl0(pl0.parse("PROCEDURE a;VAR x;;CALL a ."))
    assert.equal(obj[2].type, "CALL")
  });

  test('IF, IFELSE', function(){
    obj = transformacion_pl0(pl0.parse("VAR a,b;IF a == 3 THEN b = 3."))
    assert.equal(obj[1].type, "IF")

    obj = transformacion_pl0(pl0.parse("VAR a,b;IF a == 3 THEN b = 3 ELSE b = 2."))
    assert.equal(obj[1].type, "IFELSE")
  });

  test('ODD', function(){
    obj = transformacion_pl0(pl0.parse("VAR b;IF ODD 3 THEN b = 2 ."))
    assert.equal(obj[1].condition.type, "ODD")
  });

  test('WHILE DO', function(){
    obj = transformacion_pl0(pl0.parse("VAR a,b;WHILE a == 3 DO b = b+3."))
    assert.equal(obj[1].type, "WHILE")
  });

  test('BEGIN END', function(){
    obj = transformacion_pl0(pl0.parse("VAR a, b; BEGIN a = 3; b = b+3 END."))
    assert.equal(obj[1].type, "BEGIN")
  });

  test('Argumentos de CALL y PROCEDURE', function(){
    obj = transformacion_pl0(pl0.parse("VAR x, squ; PROCEDURE square(VAR x,VAR y,VAR z); BEGIN squ = x * x END; CALL square(2,3,4)."))
    assert.equal(obj[1][0].parameters[0].value, "x")

    obj = transformacion_pl0(pl0.parse("VAR x, squ; PROCEDURE square; BEGIN squ = x * x END; CALL square."))
    assert.equal(obj[1][0].parameters[0], undefined)

    obj = transformacion_pl0(pl0.parse("VAR x, squ; PROCEDURE square(); BEGIN squ = x * x END; CALL square()."))
    assert.equal(obj[1][0].parameters[0], undefined)
  });

  test('Error de sintaxis', function(){
    assert.throws(function() { transformacion_pl0(pl0.parse("a = 3")); }, /Expecting 'DOT'/);
  });
});
suite('Tabla de simbolos', function(){
  test('Tabla de simbolos global', function(){
    obj = transformacion_pl0(pl0.parse("CONST a = 3; VAR x; PROCEDURE pro;BEGIN x = x * x END;x=2."));
    assert.equal(obj[0].symboltable[0].id, "a") 
    assert.equal(obj[0].symboltable[0].type, "CONST") 
    assert.equal(obj[0].symboltable[0].value, "3") 
    assert.equal(obj[0].symboltable[1].id, "x") 
    assert.equal(obj[0].symboltable[1].type, "VAR") 
    assert.equal(obj[0].symboltable[1].value, "")
    assert.equal(obj[0].symboltable[2].id, "pro") 
    assert.equal(obj[0].symboltable[2].type, "PROCEDURE") 
    assert.equal(obj[0].symboltable[2].value, "0")
  });

  test('Tablas de procedure', function(){
    obj = transformacion_pl0(pl0.parse("VAR x, squ;PROCEDURE square;CONST a = 2;VAR x;PROCEDURE rectangle;VAR c;;;x = 3."))
    assert.equal(obj[1][0].symboltable[0].id, "a") 
    assert.equal(obj[1][0].symboltable[0].type, "CONST") 
    assert.equal(obj[1][0].symboltable[0].value, "2") 
    assert.equal(obj[1][0].symboltable[1].id, "x") 
    assert.equal(obj[1][0].symboltable[1].type, "VAR") 
    assert.equal(obj[1][0].symboltable[1].value, "")
    assert.equal(obj[1][0].symboltable[2].id, "rectangle") 
    assert.equal(obj[1][0].symboltable[2].type, "PROCEDURE") 
    assert.equal(obj[1][0].symboltable[2].value, "0")
  });

  test('Parametros', function(){
    obj = transformacion_pl0(pl0.parse("VAR x, squ;PROCEDURE square(VAR p, VAR j);CONST a = 2;VAR x;PROCEDURE rectangle;VAR c;;;x = 3."))
    assert.equal(obj[1][0].symboltable[0].id, "p");
    assert.equal(obj[1][0].symboltable[0].type, "PARAM");
    assert.equal(obj[0].symboltable[2].value, "2");
  });

  test('Referencia a donde se declaro un id', function(){
    obj = transformacion_pl0(pl0.parse("VAR x, squ;PROCEDURE square(VAR p, VAR j);CONST a = 2;VAR x;PROCEDURE rectangle;VAR c; c = 3;;x = 3."))
    assert.equal(obj[1][0].block[0][0].block[0].left.declared_in, "rectangle");
  });

  test('Error de no declaracion de variable', function(){
    assert.throws(function() { transformacion_pl0(pl0.parse("a = 3.")); }, /Symbol a not declared/);
  });

  test('Error de no declaracion de constante', function(){
    assert.throws(function() { transformacion_pl0(pl0.parse("VAR a; a = b.")); }, /Symbol b not declared/);
  });

  test('Error de no declaracion de procedure', function(){
    assert.throws(function() { transformacion_pl0(pl0.parse("CALL pro.")); }, /Symbol pro not declared/);
  });
	
  test('Error de constante a la izquierda', function(){
    assert.throws(function() { transformacion_pl0(pl0.parse("CONST a = 3; VAR b; PROCEDURE p; a = a + 3; CALL p."))}, /Symbol a refers to a constant/);
  });

  test('Error de numero erroneo de parametros', function(){
    assert.throws(function() { transformacion_pl0(pl0.parse("VAR x, squ;PROCEDURE square(VAR p, VAR j);CONST a = 2;VAR x;PROCEDURE rectangle;VAR c;;;CALL square.")); }, /Numero de argumentos invalido/);
  });

});
