

console.log("-------Iniciando Bot De automação de Like-------")

var counter = 0;

function doLike(){
	
	const like_btn =  document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
	if(like_btn){
		like_btn.click();
		counter++;
		console.log(`Você curtiu ${counter}posts!`);
		if(counter >= 200){
			alert('Desative o Bot Agora, Para não Sofrer Punições')
		}
	}
	const next =  document.querySelector('a.coreSpriteRightPaginationArrow');
	next.click();

}

(function loop() {
	setTimeout(() => {
		doLike();
		loop();
	}, 5000)
}())

