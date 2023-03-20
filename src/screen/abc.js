document.getElementById("postbutton").addEventListener("click",function(){
    startIndex=0;
for (let i=startIndex/20 ; i<=0 ; i+20){
while (startIndex<20){
                    fetch("//jsonplaceholder.typicode.com/posts?_start=${startIndex}&_limit=20")
            .then((data) =>{
                return data.json();
            }).then((completedata) =>{
                //console.log(completedata[2].title);
                let data1 ="";
                completedata.map((values)=>{
                    data1+=`<div class "card"  style="background-color:white;width: 14rem;height: 16rem;">
                    <h1 class="title">${values.title}</h1>
                    <p>${values.body}</p>
                    
                </div>`
                });
                document.getElementById("cards").innerHTML=data1;
            }).catch((err)=>{
                console.log(err);
            });
        
        
        
        
        function createCard(data) {
          const card = document.createElement("div");
          card.classList.add("card");
          // add card content here based on the data object
          return card;
        
        };
        startIndex=startIndex+20;
        }

    }	}
)
