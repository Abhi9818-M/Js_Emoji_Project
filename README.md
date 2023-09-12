# Emoji Search Project

## Hosted Link 

Click here --> https://abhi9818-m.github.io/Js_Emoji_Project/emoji.html

### Step 1: Create a New HTML File

Create a new HTML file and save it as index.html. Add the following code to the file:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emoji search</title>
    <link rel="stylesheet" href="./emoji.css">
</head>
<body>
  <div class="main">
    <h1 class="heading">Emoji Search Application</h1>
    <hr>
    <br>
    <div class="form">
        <input type="search" placeholder="Emoji search" id="searchBar">
        <input type="submit" value="search" id="submitButton">
    </div>
    <table>
        <tbody id="searchResultContainer"></tbody>
    </table>
</div>
    <script src="./emoji.js"></script>
    <script src="./emojiList.js"></script>
</body>
</html>

```

### Step 2: Create a New JS File
Create a new JS file and save it as index.js. Add the following code to the file:

```
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

```
### Step 3: Create a New css File
Create a new CSS file and save it as style.css. Add the following code to the file:

```
body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: cyan;
  background-color: black;
  font-family: 'Roboto Mono', monospace;
}
.main{
  padding: 15px;
}
.heading{
  font-family: cursive;
  font-size: 40px;
}
.form{
  display: flex;
  gap: 10px;
}
#searchBar{
  padding: 5px 10px;
  border-radius: 2px;
  border: none;
}
#submitButton{
  padding: 5px 10px;
  font-size: 15px;
  border-radius: 2px;
  border: none;

}
hr{
  border-top: 2px white solid;
}

.emoji{
  font-size: 300%;
  width: 8rem;
  max-width: 8rem;
  padding-left: 10px ;
}

.category{
  text-transform: capitalize;
  font-size: 20px;
  
}

.description{
  font-size: 20px;
  padding-left: 200px;
}

.description::first-letter{
  text-transform: uppercase;
}

table{
  border-collapse: collapse;
  width: 100%;
  margin-top: 30px;
}
tr, td{
  padding: 10px;
  border-bottom: 1px solid #333333;
}

```

### Add Emojilist.js File
