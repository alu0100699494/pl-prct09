var assert = chai.assert;

suite('Tests', function(){
  test('Recursividad a izquierdas', function(){
    obj = pl0.parse("a = 3-2-5 .")
    assert.equal(obj[0].right.left.type, "-") 
  });

  test('General y asignación', function(){
    obj = pl0.parse("a = 3 .")
    assert.equal(obj[0].type, "=")
    assert.equal(obj[0].left, "a")
    assert.equal(obj[0].right, "3") 
  });

  test('Suma', function(){
    obj = pl0.parse("a = 2 + 3 .")
    assert.equal(obj[0].right.type, "+")
  });

  test('Multiplicación', function(){
    obj = pl0.parse("a = 2 * 3 .")
    assert.equal(obj[0].right.type, "*") 
  });

  test('División', function(){
    obj = pl0.parse("a = 2 / 3 .")
    assert.equal(obj[0].right.type, "/")
  });

  test('Paréntesis', function(){
    obj = pl0.parse("a = (2+3) * 3 .")
    assert.equal(obj[0].right.left.type, "+")
  });

  test('Precedencia', function(){
    obj = pl0.parse("a = 2+3*3 .")
    assert.equal(obj[0].right.right.type, "*")
  });

  test('Comparación', function(){
    obj = pl0.parse("IF a == 3 THEN b = 2 .")
    assert.equal(obj[0].condition.type, "==")
  });

  test('block', function(){
    obj = pl0.parse("CONST a = 3; VAR b; PROCEDURE p; a = a + 3; CALL p.")
    assert.equal(obj[0][0].type, "CONST")
    assert.equal(obj[0][1].type, "VAR")
    assert.equal(obj[0][2].type, "PROCEDURE")
    assert.equal(obj[1].type, "CALL")
  });

  test('CALL', function(){
    obj = pl0.parse("CALL a .")
    assert.equal(obj[0].type, "CALL")
  });

  test('IF, IFELSE', function(){
    obj = pl0.parse("IF a == 3 THEN b = 3.")
    assert.equal(obj[0].type, "IF")

    obj = pl0.parse("IF a == 3 THEN b = 3 ELSE b = 2.")
    assert.equal(obj[0].type, "IFELSE")
  });

  test('ODD', function(){
    obj = pl0.parse("IF ODD 3 THEN b = 2 .")
    assert.equal(obj[0].condition.type, "ODD")
  });

  test('WHILE DO', function(){
    obj = pl0.parse("WHILE a == 3 DO b = b+3.")
    assert.equal(obj[0].type, "WHILE")
  });

  test('BEGIN END', function(){
    obj = pl0.parse("BEGIN a = 3; b = b+3 END.")
    assert.equal(obj[0].type, "BEGIN")
  });

  test('Argumentos de CALL y PROCEDURE', function(){
    obj = pl0.parse("VAR x, squ; PROCEDURE square(VAR x,VAR y,VAR z); BEGIN squ = x * x END; CALL square(x).")
    assert.equal(obj[0][2].parameters[0].value, "x")

    obj = pl0.parse("VAR x, squ; PROCEDURE square; BEGIN squ = x * x END; CALL square.")
    assert.equal(obj[0][2].parameters[0], undefined)

    obj = pl0.parse("VAR x, squ; PROCEDURE square(); BEGIN squ = x * x END; CALL square().")
    assert.equal(obj[0][2].parameters[0], undefined)
  });

  test('Error de sintaxis', function(){
    assert.throws(function() { pl0.parse("a = 3"); }, /Expecting 'DOT'/);
  });

});
