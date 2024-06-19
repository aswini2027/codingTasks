# Shoe Inventory Management

## Overview
This coding task involves creating a shoe inventory management system in JavaScript. The system includes functionalities to search for shoes, find the shoe with the lowest and highest value per item, edit shoe details, and sort the inventory.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Credits](#credits)

## Installation
To run this code locally, follow these steps:
1. Clone the repository:
    ```bash
    git clone https://github.com/aswini2027/codingTasks.git
    ```
2. Navigate to the project directory:
    ```bash
    cd codingTasks
    ```
3. Open the `inventory.js` file in your preferred code editor.

## Functions
`findShoe(shoeName)`
Searches for a shoe by its name in the inventory array and logs the details of the found shoe.

Parameters:
shoeName (string): The name of the shoe to search for.

`findMin(arr)`
Finds and logs the shoe with the lowest value per item in the given array.

- Parameters:
    - arr (array): The array of shoe objects.

`findMax(arr)`
Finds and logs the shoe with the highest value per item in the given array.

Parameters:
arr (array): The array of shoe objects.

`editShoes(shoes, shoeProductCode, newName, newProductCode, newQuantity, newValuePerItem)`
Edits the details of a shoe in the inventory array based on the given product code.

Parameters:
shoes (array): The array of shoe objects.
shoeProductCode (string): The product code of the shoe to edit.
newName (string): The new name of the shoe.
newProductCode (string): The new product code of the shoe.
newQuantity (number): The new quantity of the shoe.
newValuePerItem (number): The new value per item of the shoe.

`sortShoes(shoes)`
Sorts the shoe inventory array in ascending order based on the value per item and logs the sorted array.

Parameters:
shoes (array): The array of shoe objects.

## Credits
This project was created by Aswini2027 as part of a coding task. The functions were implemented to manage a shoe inventory, allowing for various operations such as searching, finding minimum and maximum values, editing, and sorting.

## Usage
To use the shoe inventory management system, open the `inventory.js` file in your code editor and run it using Node.js. You can call the following functions:
```javascript
findShoe("sandal");
findMin(shoes);
findMax(shoes);
editShoes(shoes, "M4356", "HEELS", "H8017", 5, 45.78);
sortShoes(shoes);
