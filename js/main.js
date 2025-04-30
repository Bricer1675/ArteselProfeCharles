document.addEventListener("DOMContentLoaded", () => {
    const categorias = [
      {
        nombre: "Cerámica",
        imagen: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee", // puedes reemplazarla por una imagen tuya
      },
      {
        nombre: "Tejidos",
        imagen: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845",
      },
      {
        nombre: "Joyería Artesanal",
        imagen: "https://images.unsplash.com/photo-1602526432485-8a94fbb2d9f3",
      },
    ];
  
    const contenedor = document.querySelector("#categorias .row");
  
    categorias.forEach((categoria) => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "col-md-4 mb-4";
  
      tarjeta.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${categoria.imagen}" class="card-img-top" alt="${categoria.nombre}">
          <div class="card-body">
            <h5 class="card-title">${categoria.nombre}</h5>
            <p class="card-text">Explora nuestras creaciones únicas en ${categoria.nombre.toLowerCase()}.</p>
            <a href="producto.html?categoria=${encodeURIComponent(categoria.nombre)}" class="btn btn-primary">Ver más</a>
          </div>
        </div>
      `;
  
      contenedor.appendChild(tarjeta);
    });
  });
  