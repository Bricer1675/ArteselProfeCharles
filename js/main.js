document.addEventListener("DOMContentLoaded", () => {
    // Mostrar categorías en index.html
    const contenedorCategorias = document.getElementById("contenedorCategorias");
    if (contenedorCategorias) {
      categorias.forEach((categoria) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-md-4", "mb-4");
        tarjeta.innerHTML = `
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title">${categoria.nombre}</h5>
              <p class="card-text">${categoria.descripcion}</p>
              <a href="producto.html?categoria=${encodeURIComponent(categoria.nombre)}" class="btn btn-primary">Ver más</a>
            </div>
          </div>
        `;
        contenedorCategorias.appendChild(tarjeta);
      });
    }
  
    // Mostrar productos por categoría en producto.html
    const contenedorProductos = document.getElementById("contenedorProductos");
    if (contenedorProductos) {
      const params = new URLSearchParams(window.location.search);
      const categoria = params.get("categoria");
  
      if (categoria) {
        document.getElementById("tituloCategoria").textContent = `Productos de ${categoria}`;
        const productos = productosPorCategoria[categoria];
  
        if (productos) {
          productos.forEach(producto => {
            const card = document.createElement("div");
            card.classList.add("col-md-4", "mb-4");
            card.innerHTML = `
              <div class="card h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <p class="card-text">${producto.descripcion}</p>
                </div>
              </div>
            `;
            contenedorProductos.appendChild(card);
          });
        } else {
          contenedorProductos.innerHTML = `<p class="text-center">No hay productos disponibles para esta categoría.</p>`;
        }
      }
    }
  });
  