function transformacion_pl0(arbol)
{
  function transformacion_PLUS(nombre, nodo, padre)
  {
    if(nodo.type && nodo.type == "+")
    {
        // Comprobar que los hijos sean constantes
      var left = null;
      var right = null;
      
      left = (typeof nodo.left != "object")? nodo.left : null;
      right = (typeof nodo.right != "object")? nodo.right : null;
      
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
        // Comprobar que los hijos sean constantes
      var left = null;
      var right = null;
      
      left = (typeof nodo.left != "object")? nodo.left : null;
      right = (typeof nodo.right != "object")? nodo.right : null;
      
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
        // Comprobar que los hijos sean constantes
      var left = null;
      var right = null;
      
      left = (typeof nodo.left != "object")? nodo.left : null;
      right = (typeof nodo.right != "object")? nodo.right : null;
      
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
        // Comprobar que los hijos sean constantes
      var left = null;
      var right = null;
      
      left = (typeof nodo.left != "object")? nodo.left : null;
      right = (typeof nodo.right != "object")? nodo.right : null;
      
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
        console.log(k + ":" + v);
              recorrer(v);
        // Constant folding aquí
        constant_folding(k, v, arbol); // Clave, subarbol y padre
          });
      }
      else {
          // jsonOb is a number or string
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

  var resultado = clone(arbol);
  recorrer(resultado);
  
  return resultado;
}