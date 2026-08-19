const items = {
	UdD: {
		Result:"Universidad de Dagupan",
		Info:"78 Arellano Street 2400 Dagupan",
		Image:"https://www.pacu.org.ph/wordpress/wp-content/uploads/2023/09/344371375_1164552804216248_1386670123853892447_n.jpg"
	},
	
	Upang: {
		Result:"University of Pangasinan",
		Info:"3 Arellano Street Dagupan",
		Image:"https://media.schoolfinderph.com/schools/phinma-university-of-pangasinan/0.jpg"
	},
	
	PHP: {
		Result:"PHP",
		Info:"A Server-Side scripting language",
		Image:"https://www.php.net/images/logos/new-php-logo.svg"
	},
	
	Cobol: {
		Result:"Cobol",
		Info:"Was designed with business applications in mind",
		Image:"https://peq42.com/wp-content/uploads/2024/03/cobol-programming-language.webp"
	},
	
	Fortran: {
		Result:"Fortran IV",
		Info:"Fortran IV, a major update to the Fortran programming language",
		Image:"https://image2.slideserve.com/4459036/a-program-in-fortran-iv-l.jpg"
	},
	
	Telnet: {
		Result:"Telnet",
		Info:"is a network protocol that enables remote access to another computer",
		Image:"https://www.thecodebuzz.com/wp-content/uploads/2021/09/install-telnet-on-windows-machine-1024x512.jpg"
	}
	
}

let sbutton = document.querySelector("#btn");
let typedData = document.querySelector("#search");
let resultrenderer = document.querySelector("#whitebody");
let htitle = document.querySelector("#txtres");
let pdesc = document.querySelector("#description");
let img = document.querySelector("#i");
let back = document.querySelector("#btn2");

sbutton.addEventListener("click", function(e) {
	e.preventDefault();
	
	function search(data) {
		 return new Promise((resolve, reject) => {
			   setTimeout(() => {
				   resultrenderer.style.display = "block";
				   htitle.style.display = "block";
				   img.style.display = "block";
				   htitle.textContent = "";
				   pdesc.textContent = "";
				   img.src = "";
				   img.alt = "";
				   if(items[data]) {
					   htitle.textContent = items[data].Result;
					   pdesc.textContent = items[data].Info;
					   img.src = items[data].Image;
					   resolve("Success");
				   } else {
					   htitle.textContent = "No search result found";
					   reject("No result found");
				   }
			   }, 1000);
		 });
	}
	
	search(typedData.value);
});

back.addEventListener("click", function() {
	window.location.href = "index.html";
});