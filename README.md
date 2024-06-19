
Shoe Inventory Management
Overview
This coding task involves creating a shoe inventory management system in JavaScript. The system includes functionalities to search for shoes, find the shoe with the lowest and highest value per item, edit shoe details, and sort the inventory.

Table of Contents
Installation
Usage
Functions
Credits
Installation
To run this code locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/aswini2027/codingTasks.git
Navigate to the project directory:
bash
Copy code
cd codingTasks
Open the inventory.js file in your preferred code editor.
Usage
To use the shoe inventory management system, open the inventory.js file in your code editor and run it using Node.js. You can call the following functions:

Functions
findShoe(shoeName)
Searches for a shoe by its name in the inventory array and logs the details of the found shoe.

Parameters:

shoeName (string): The name of the shoe to search for.
Example:

javascript
Copy code
findShoe("sandal");
findMin(arr)
Finds and logs the shoe with the lowest value per item in the given array.

Parameters:

arr (array): The array of shoe objects.
Example:

javascript
Copy code
findMin(shoes);
findMax(arr)
Finds and logs the shoe with the highest value per item in the given array.

Parameters:

arr (array): The array of shoe objects.
Example:

javascript
Copy code
findMax(shoes);
editShoes(shoes, shoeProductCode, newName, newProductCode, newQuantity, newValuePerItem)
Edits the details of a shoe in the inventory array based on the given product code.

Parameters:

shoes (array): The array of shoe objects.
shoeProductCode (string): The product code of the shoe to edit.
newName (string): The new name of the shoe.
newProductCode (string): The new product code of the shoe.
newQuantity (number): The new quantity of the shoe.
newValuePerItem (number): The new value per item of the shoe.
Example:

javascript
Copy code
editShoes(shoes, "M4356", "HEELS", "H8017", 5, 45.78);
sortShoes(shoes)
Sorts the shoe inventory array in ascending order based on the value per item and logs the sorted array.

Parameters:

shoes (array): The array of shoe objects.
Example:

javascript
Copy code
sortShoes(shoes);

Credits
This project was created by Aswini2027 as part of a coding task. The functions were implemented to manage a shoe inventory, allowing for various operations such as searching, finding minimum and maximum values, editing, and sorting.
