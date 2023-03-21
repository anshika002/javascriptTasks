let numDisplayed = 20;
function createCard() {
	const card1 = document.createElement("div");
	card1.classList.add("card");
	// add card content here based on the data object
	return card1;
  
  };
function displayCards(url, titleKey, bodyKey, nameKey, emailKey, numToDisplay) {
    fetch(url)
      .then((data) => data.json())
      .then((completedata) => {
        let data1 = "";
        completedata.slice(0, numToDisplay).forEach((values) => {
          const card = createCard();
          card.innerHTML = `<div class "card" style="background-color:white;width: 14rem;height: 13rem;>
            <h1 class="title" >${values[titleKey] || values[nameKey]}</h1>
            <p>${values[bodyKey] || values[emailKey] || ""}</p>
          `;
          data1 += card.outerHTML;
        });
        document.getElementById("cards").apendChild(data1);
      })
      .catch(console.log);
  }
  // document.getElementById("postbutton").addEventListener("click", () => {
  //   numDisplayed += 20;
  //   displayCards("//jsonplaceholder.typicode.com/posts", "title", "body", "", "", numDisplayed);
  // });
  
  // document.getElementById("commentbutton").addEventListener("click", () => {
  //   numDisplayed += 20;
  //   displayCards("//jsonplaceholder.typicode.com/comments", "", "body", "name", "email", numDisplayed);
  // });
  document.getElementById("loadmore").addEventListener("click", () => {
    numDisplayed += 20;
    const postButton = document.getElementById("postbutton");
    const commentButton = document.getElementById("commentbutton");
    if (postButton.classList.contains("active")) {
      displayCards("//jsonplaceholder.typicode.com/posts", "title", "body", "", "", numDisplayed);
    } else if (commentButton.classList.contains("active")) {
      displayCards("//jsonplaceholder.typicode.com/comments", "", "body", "name", "email", numDisplayed);
    }
  });
  document.getElementById("postbutton").addEventListener("click", () => {
    numDisplayed = 20;
    displayCards("//jsonplaceholder.typicode.com/posts", "title", "body", "", "", numDisplayed);
    document.getElementById("postbutton").classList.add("active");
    document.getElementById("commentbutton").classList.remove("active");
  });
  
  document.getElementById("commentbutton").addEventListener("click", () => {
    numDisplayed = 20;
    displayCards("//jsonplaceholder.typicode.com/comments", "", "body", "name", "email", numDisplayed);
    document.getElementById("postbutton").classList.remove("active");
    document.getElementById("commentbutton").classList.add("active");
  });
  document.getElementById("postbutton").click();