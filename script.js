function accueil(){
	msg=prompt("Je veux affichez ce message","Tapez...");
	if(msg){
		contenu=document.querySelector(".section");
		contenu.innerHTML=msg;
	}
}
