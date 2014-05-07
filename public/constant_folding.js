function transformacion_pl0(arbol)
{
  function buscar_valores_hijos(nodo)
  {
    var left = null;
    var right = null;
    
    if(typeof nodo.left == "object" && nodo.left.type && nodo.left.type == "CONST")        // Buscar constante
      left = nodo.left.value;
    else if(typeof nodo.left != "object")                                                 // Buscar numero
      left = nodo.left;
      
    if(typeof nodo.right == "object" && nodo.right.type && nodo.right.type == "CONST")     // Buscar constante
      right = nodo.right.value;
    else if(typeof nodo.right != "object")                                                 // Buscar numero
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

  var transformaciones_arbol = [transformacion_PLUS, transformacion_MINUS,transformacion_TIMES, transformacion_DIV];

  function constant_folding(nombre, nodo, padre) {
    // Ejecutar transformaciones árbol
    $.each(transformaciones_arbol, function(i, v) {
      v(nombre, nodo, padre);
    });
  }

  function recorrer(arbol) {
    if( typeof arbol == "object" ) {
      $.each(arbol, function(k,v) {
        recorrer(v);
        // Constant folding aquí
        constant_folding(k, v, arbol); // Clave, subarbol y padre
      });
    }
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
  var resultado = clone(arbol);
  recorrer(resultado);
  
  return resultado;
}