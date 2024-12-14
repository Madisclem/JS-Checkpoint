
const produits = document.querySelectorAll('.box');

produits.forEach(produit => {
  const btnPlus = produit.querySelector('.plus');
  const btnMoins = produit.querySelector('.moins');
  const nombre = produit.querySelector('.num');
  const total = produit.querySelector('.price');
  const prixUni = produit.querySelector('.prix-uni');
  const btnHeart = produit.querySelector('.btn');
  const btnDelete = produit.querySelector('.faSolid');

  let qty = parseInt(nombre.innerText);
  const prixUnitaire = parseInt(prixUni.innerText);

  function updateTotal() {
    total.innerText = qty * prixUnitaire;
    updateTotalCommande();
  }

  function updateTotalCommande() {
    let totalCommande = 0;
    produits.forEach(produit => {
      const totalProduit = produit.querySelector('.price');
      totalCommande += parseInt(totalProduit.innerText);
    });
    document.getElementById('tyu').innerText = totalCommande;
  }

  btnPlus.addEventListener('click', () => {
    qty++;
    nombre.innerText = qty;
    updateTotal();
  });

  btnMoins.addEventListener('click', () => {
    if (qty > 0) {
      qty--;
      nombre.innerText = qty;
      updateTotal();
    }
  });

  btnHeart.addEventListener('click', () => {
    btnHeart.classList.toggle('heart-liked');
  });

  btnDelete.addEventListener('click', () => {
    produit.remove(); 
    updateTotalCommande();
  });


  updateTotal();
});
