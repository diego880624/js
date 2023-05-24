function Libro(titulo, autor, genero, stock, prestamo) {
  this.titulo = titulo;
  this.autor = autor;
  this.genero = genero;
  this.stock = stock;
  this.prestamo = prestamo;
}

var biblioteca = [];

function altaLibro() {
  var titulo = prompt("Ingrese el título del libro (o escriba 'fin' para terminar):");
  if (titulo.toLowerCase() === 'fin') {
    return; // Si se ingresa 'fin', se termina la carga de libros
  }

  var autor = prompt("Ingrese el autor del libro:");
  var genero = prompt("Ingrese el género del libro:");
  var stock = parseInt(prompt("Ingrese la cantidad en stock:"));
  var prestamo = parseInt(prompt("Ingrese la cantidad en préstamo:"));

  var libro = new Libro(titulo, autor, genero, stock, prestamo);
  biblioteca.push(libro);

  altaLibro(); // Se llama recursivamente para ingresar más libros
}

function mostrarLibro(libro) {
  if (!libro) {
    document.write("<p>No se encontró el libro.</p>");
    return;
  }

  document.write("<h2>Libro encontrado:</h2>");
  document.write("<p><strong>Título:</strong> " + libro.titulo + "</p>");
  document.write("<p><strong>Autor:</strong> " + libro.autor + "</p>");
  document.write("<p><strong>Género:</strong> " + libro.genero + "</p>");
  document.write("<p><strong>Stock:</strong> " + libro.stock + "</p>");
  document.write("<p><strong>Préstamo:</strong> " + libro.prestamo + "</p>");
}

function buscarLibroPorGenero(genero) {
  var libroFiltrado = biblioteca.find(function (libro) {
    return libro.genero.toLowerCase() === genero.toLowerCase();
  });
  return libroFiltrado;
}

// Ejemplo de uso
altaLibro(); // Solicita al usuario ingresar los datos de los libros

var generoFiltrar = prompt("Ingrese el género para filtrar el libro:");
var libroFiltrado = buscarLibroPorGenero(generoFiltrar);

mostrarLibro(libroFiltrado); // Muestra el libro filtrado por género
