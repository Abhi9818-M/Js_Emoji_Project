const searchField = document.getElementById("searchBar")
const submitButton = document.getElementById("submitButton")
console.log(searchField, submitButton);

const searchEmoji = ()=>{
  
   
    const searchFieldValue = searchField.value;
    const filteredList = emojiList.filter((e)=>{
        if(e.aliases.some(ele=>ele.startsWith(searchFieldValue))){
            return true;
        }
        if(e.tags.some(ele=>ele.startsWith(searchFieldValue))){
            return true;
        }
    })

    const searchResultContainer = document.getElementById("searchResultContainer")
    
    searchResultContainer.innerText = "";

    filteredList.map((ele)=>{
        const new_row = document.createElement('tr');
        const emoji = document.createElement("td")
        const description = document.createElement("td")
        const category = document.createElement("td")
       

        emoji.innerText = ele.emoji;
        description.innerText = ele.description;
        category.innerText = ele.category;
    
        emoji.classList.add("emoji");
        description.classList.add("description");
        category.classList.add("category");

     
        new_row.appendChild(emoji);
        new_row.appendChild(category);
        new_row.appendChild(description);
   
        searchResultContainer.appendChild(new_row);
    });
    
};


submitButton.addEventListener("click" , searchEmoji);
searchField.addEventListener("keyup", searchEmoji)



window.onload = () => searchEmoji()