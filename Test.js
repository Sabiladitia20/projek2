
document.addEventListener('DOMContentLoaded', () => {
  const exploreButtons = document.querySelectorAll('.vehicle-card .btn');

  exploreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const vehicle = vehicles[index];
      const params = new URLSearchParams({
        image: vehicle.image,
        name: vehicle.name,
        brand: vehicle.brand,
        price: vehicle.price,
        spesification: vehicle.spesification,
      });
      window.location.href = `detail.html?${params.toString()}`;
    });
  });
});
