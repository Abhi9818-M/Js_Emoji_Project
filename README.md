# Emoji Search Project

## Hosted Link 

Click here --> https://abhi9818-m.github.io/Js_Emoji_Project/emoji.html

### Step 1: Create a New HTML File

Create a new HTML file and save it as index.html. Add the following code to the file:

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


