var assert = chai.assert;

suite('Tests', function(){
  test('Recursividad a izquierdas', function(){
    obj = calculator.parse("a = 3-2-5 ")
    assert.equal(obj[0], "-4") 
  });

  test('Asignación', function(){
    obj = calculator.parse("a = 3 .")
    assert.equal(obj[0], 3)
  });

  test('Suma', function(){
    obj = calculator.parse("a = 2 + 3 .")
    assert.equal(obj[0], "5")
  });

  test('Multiplicación', function(){
    obj = calculator.parse("a = 2 * 3 .")
    assert.equal(obj[0], "6") 
  });

  test('División', function(){
    obj = calculator.parse("a = 6 / 3 .")
    assert.equal(obj[0], "2")
  });

  test('Paréntesis', function(){
    obj = calculator.parse("a = (2+3) * 3 .")
    assert.equal(obj[0], "15")
  });

  test('Precedencia', function(){
    obj = calculator.parse("a = 2+3*3 .")
    assert.equal(obj[0], "11")
  });

  test('Comparación', function(){
    obj = calculator.parse("IF a == 3 THEN b = 2 .")
    assert.equal(obj[0].condition.type, "==")
  });

  test('block', function(){
    obj = calculator.parse("CONST a = 3; VAR b; PROCEDURE p; a = a + 3; CALL p.")
    assert.equal(obj[0].left.type, "CONST ID")
    assert.equal(obj[1].type, "VAR ID")
    assert.equal(obj[2].type, "PROCEDURE")
  });

  test('CALL', function(){
    obj = calculator.parse("CALL a .")
    assert.equal(obj[0].type, "CALL")
  });

  test('IF, IFELSE', function(){
    obj = calculator.parse("IF a == 3 THEN b = 3.")
    assert.equal(obj[0].type, "IF")

    obj = calculator.parse("IF a == 3 THEN b = 3 ELSE b = 2.")
    assert.equal(obj[0].type, "IFELSE")
  });

  test('ODD', function(){
    obj = calculator.parse("IF ODD 3 THEN b = 2 .")
    assert.equal(obj[0].condition.type, "ODD")
  });

  test('WHILE DO', function(){
    obj = calculator.parse("WHILE a == 3 DO b = b+3.")
    assert.equal(obj[0].type, "WHILE")
  });

  test('BEGIN END', function(){
    obj = calculator.parse("BEGIN a = 3; b = b+3 END.")
    assert.equal(obj[0].type, "BEGIN")
  });

  test('Argumentos de CALL y PROCEDURE', function(){
    obj = calculator.parse("VAR x, squ; PROCEDURE square(x,y,z); BEGIN squ = x * x END; CALL square(x).")
    assert.equal(obj[3].arguments[0].value, "x")

    obj = pl0.parse("VAR x, squ; PROCEDURE square; BEGIN squ = x * x END; CALL square.")
    assert.equal(obj[3].arguments, undefined)

    obj = pl0.parse("VAR x, squ; PROCEDURE square(); BEGIN squ = x * x END; CALL square().")
    assert.equal(obj[3].arguments, undefined)
  });

  test('Error de sintaxis', function(){
    assert.throws(function() { calculator.parse("a = 3"); }, /Expected "."/);
  });

});
