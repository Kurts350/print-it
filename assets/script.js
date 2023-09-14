document.addEventListener("DOMContentLoaded", function () {
	const slides = [
	  {
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	  },
	  {
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	  },
	  {
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	  },
	  {
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	  },
	];
  
	const banniere = document.getElementById("banner");
	const banniereImage = document.querySelector(".banner-img");
	const tagLine = document.querySelector("#banner p");
	const contenaireDots = document.querySelector(".dots");
	const flecheGauche = document.querySelector(".arrow_left");
	const flecheDroite = document.querySelector(".arrow_right");
  
	let indexActuel = 0;
  
	// Fonction pour mettre à jour la bannière avec la slide actuelle
	function reactualiserBanniere(index) {
	  const slideActuel = slides[index];
	  banniereImage.src = `assets/images/slideshow/${slideActuel.image}`;
	  tagLine.innerHTML = slideActuel.tagLine;
  
	  // 
	  const dots = document.querySelectorAll(".dot");
	  dots.forEach((dot) => {
		dot.classList.remove("dot_selected");
	  });
  
	  // Supprimez la classe "dot_selected" de tous les points
	  dots[index].classList.add("dot_selected");
	}
  
	// Fonction pour gérer le clique sur la flèche gauche
	function slidePrecedente() {
		indexActuel = (indexActuel - 1 + slides.length) % slides.length;
		reactualiserBanniere(indexActuel);
	  }
  
	// Fonction pour gérer le clique sur la flèche droite
	function slideSuivante() {
		indexActuel = (indexActuel + 1) % slides.length;
		reactualiserBanniere(indexActuel);
	  }
  
	// Créez et ajoutez des points pour chaque diapositive
	slides.forEach((slide, index) => {
	  const dot = document.createElement("div");
	  dot.classList.add("dot");
	  dot.addEventListener("click", () => {
		indexActuel = index;
		reactualiserBanniere(indexActuel);
	  });
	  contenaireDots.appendChild(dot);
	});
  
	// Ajouter des écouteurs d'événements de clic aux flèches
	flecheGauche.addEventListener("click", slidePrecedente);
	flecheDroite.addEventListener("click", slideSuivante);
  
	// Initialisez la bannière avec la première diapositive
	reactualiserBanniere(indexActuel);
  });
  