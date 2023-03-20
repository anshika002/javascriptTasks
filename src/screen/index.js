function createCard() {
	const card = document.createElement("div");
	card.classList.add("card");
	// add card content here based on the data object
	return card;
  
  };
function posts() {
	fetch("//jsonplaceholder.typicode.com/posts")
					.then((data) =>{
						return data.json();
					}).then((completedata) =>{
						//console.log(completedata[2].title);
						let data1 ="";
						completedata.map((values)=>{
							data1+=`<div class "card"  style="background-color:white;width: 14rem;height: 16rem; >
							<h1 class="title">${values.title}</h1>
							<p>${values.body}</p>
							
						</div>`
						});
						document.getElementById("cards").innerHTML=data1;
					}).catch((err)=>{
						console.log(err);
					});
createCard();
	
}

posts();


document.getElementById("postbutton").addEventListener("click",function(){
	posts();})
		
document.getElementById("commentbutton").addEventListener("click",function(){
			fetch("//jsonplaceholder.typicode.com/comments")
				.then((data) =>{
					return data.json();
				}).then((completedata) =>{
					//console.log(completedata[2].title);
					let data1 ="";
					completedata.map((values)=>{
						data1+=`<div class "card" style="background-color:white;width: 14rem;height: 13rem;>
						<h1 class="title">${values.name}</h1>
						<p>${values.email}</p>
						<p>${values.body}</p>
						
					</div>`
					});
					document.getElementById("cards").innerHTML=data1;
				}).catch((err)=>{
					console.log(err);
				});
 createCard();
			}
		)
			
		
		
		