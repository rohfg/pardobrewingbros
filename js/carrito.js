window.onload = function () {
    // Variables
    var baseDeDatos = [
        {
            id: 1,
            nombre: 'Vienna Lager',
            precio: 350
        },
        {
            id: 2,
            nombre: 'Dubbel',
            precio: 420
        },
        {
            id: 3,
            nombre: 'Red IPA',
            precio: 350
        },
        {
            id: 4,
            nombre: 'AAA',
            precio: 340
        },
        {
            id: 5,
            nombre: 'Doble IPA',
            precio: 590
        },
        {
            id: 6,
            nombre: 'Sueños Revoltosos',
            precio: 420
        },
        {
            id: 7,
            nombre: 'Despachatada',
            precio: 380
        },
        {
            id: 8,
            nombre: 'APA Flight Simulator',
            precio: 499
        },        {
            id: 9,
            nombre: 'English IPA',
            precio: 420
        },
    ]
    
    var $items = document.querySelector('#items');
    var carrito = [];
    var total = 0;
    var $carrito = document.querySelector('#carrito');
    var $total = document.querySelector('#total');
    // Funciones
    function renderItems () {
        for (var info of baseDeDatos) {
            // Estructura
            var miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            var miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            var miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre'];
            // Precio
            var miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = '$' +info['precio'];
            // Boton 
            var miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }
    function anyadirCarrito () {
        // Añadimos el Nodo a nuestro carrito
        carrito.push(this.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Renderizamos el carrito 
        renderizarCarrito();

    }

    function renderizarCarrito () {
        // Vaciamos todo el html
        $carrito.textContent = '';
        // Generamos los Nodos a partir de carrito
        carrito.forEach(function (item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            var miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Creamos el nodo del item del carrito
            var miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right');
            miNodo.textContent = `${miItem[0]['nombre']} - $${miItem[0]['precio']}`;
            // Boton de borrar
            var miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.setAttribute('posicion', indice);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
 
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function borrarItemCarrito () {
        // Obtenemos la posicion que hay en el boton pulsado
        var posicion = this.getAttribute('posicion');
        // Borramos la posicion que nos interesa
        carrito.splice(posicion, 1);
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    function calcularTotal () {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (var item of carrito) {
            // De cada elemento obtenemos su precio
            var miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        // Formateamos el total para que solo tenga dos decimales
        var totalDosDecimales = total.toFixed(2);
        // Renderizamos el precio en el HTML
        $total.textContent = totalDosDecimales;
    }
    // Eventos

    // Inicio
    renderItems();
} 