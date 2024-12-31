document.addEventListener('DOMContentLoaded', () => {
  const queryParams = new URLSearchParams(window.location.search);
  const image = queryParams.get('image');
  const name = queryParams.get('name');
  const brandName = queryParams.get('brand');
  const price = queryParams.get('price');
  const spesification = queryParams.get('spesification');

  const mainImage = document.getElementById('product-image');
  const productName = document.getElementById('product-name');
  const productBrand = document.getElementById('product-brand');
  const productPrice = document.getElementById('product-price');
  const productSpesification = document.getElementById('product-spesification');

  if (image) mainImage.src = image;
  if (name) productName.textContent = name;
  if (brandName) productBrand.textContent = brandName;
  if (price) productPrice.textContent = price;
  if (spesification) productSpesification.textContent = spesification;
});
