function transformacion_pl0(arbol)
{
  var tabla_simbolos = [];

  function buscar_constante(id)
  {
    var valor = null;
    
    // iterar sobre la tabla de símbolos
    
    // Stringificar
    return valor;
  }

  function buscar_valores_hijos(nodo)
  {
    var left = null;
    var right = null;
    
    if(typeof nodo.left == "object" && nodo.left.id)       // Buscar constante
      left = buscar_constante(nodo.left.id);
    else if(typeof nodo.left != "object")                  // Buscar numero
      left = nodo.left;
      
    if(typeof nodo.right == "object" && nodo.right.id)     // Buscar constante
      right = buscar_constante(nodo.right.id);
    else if(typeof nodo.right != "object")                 // Buscar numero
      right = nodo.right;
  
    return [left, right];
  }

  function transformacion_PLUS(nombre, nodo, padre)
  {
    if(nodo.type && nodo.type == "+")
    {
      var result = buscar_valores_hijos(nodo);
      var left = result[0];
      var right = result[1];
     
      if(left && right)
      {
        delete nodo;
        padre[nombre] = parseFloat(left) + parseFloat(right);
      }
    }
  }
  
  function transfomacion_UMINUS(nombre, nodo, padre)
  {
    if(nodo.type && nodo.type == "-" && nodo.value)
    {
      var value = null;
      
      // Constante
      if(nodo.value.id)
        value = buscar_constante(nodo.value.id);
      // Valor numérico
      else
        value = nodo.value
        
      if(value)
      {
        delete nodo;
        padre[nombre] = - parseFloat(value);
      }
    }
  }
  
  function transformacion_MINUS(nombre, nodo, padre)
  {
    if(nodo.type && nodo.type == "-")
    {
      var result = buscar_valores_hijos(nodo);
      var left = result[0];
      var right = result[1];
      
      if(left && right)
      {
        delete nodo;
        padre[nombre] = parseFloat(left) - parseFloat(right);
      }
    }
  }
  
  function transformacion_TIMES(nombre, nodo, padre)
  {
    if(nodo.type && nodo.type == "*")
    {
      var result = buscar_valores_hijos(nodo);
      var left = result[0];
      var right = result[1];
      
      if(left && right)
      {
        delete nodo;
        padre[nombre] = parseFloat(left) * parseFloat(right);
      }
    }
  }
  
  function transformacion_DIV(nombre, nodo, padre)
  {
    if(nodo.type && nodo.type == "/")
    {
      var result = buscar_valores_hijos(nodo);
      var left = result[0];
      var right = result[1];
      
      if(left && right)
      {
        delete nodo;
        padre[nombre] = parseFloat(left) / parseFloat(right);
      }
    }
  }

  var transformaciones_arbol = [transformacion_PLUS, transformacion_MINUS, transfomacion_UMINUS, transformacion_TIMES, transformacion_DIV];

  function constant_folding(nombre, nodo, padre) {
    // Ejecutar transformaciones árbol
    $.each(transformaciones_arbol, function(i, v) {
      v(nombre, nodo, padre);
    });
  }

  function recorrer(arbol) {
    // Si tiene tabla de símbolos, añadir a la pila de tabla de símbolos
    if(arbol.symboltable && arbol.type && arbol.type == "PROCEDURE")
    {
      var nombre = arbol.id;
        
      // Añadir tabla a la pila de tablas
      tabla_simbolos.push( {nombre: nombre, tabla: arbol.symboltable} );
    }
    
    // Recorrer el árbol
    if( typeof arbol == "object" ) {
      $.each(arbol, function(k,v) {
        recorrer(v);
        // Constant folding aquí
        constant_folding(k, v, arbol); // Clave, subarbol y padre
      });
    }
    
    // Eliminar la última tabla de símbolos (salida de recursion), siempre que no sea la global
    if(arbol.symboltable && arbol.type && arbol.type == "PROCEDURE" && tabla_simbolos[tabla_simbolos.length - 1] != "Global")
      tabla_simbolos.pop();
  }

  function clone(obj) {
		if (null == obj || "object" != typeof obj) return obj;
		var copy = obj.constructor();
		for (var attr in obj) {
			if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
		}
		return copy;
  }

  // Enviar resultado
  var resultado = clone( arbol );
  // Añadimos la tabla global aquí
  tabla_simbolos.push( { nombre: "Global", tabla: resultado[0].symboltable } );
  
  recorrer(resultado);
  
  return resultado;
}