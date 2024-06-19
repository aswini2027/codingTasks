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

## Usage
To use the shoe inventory management system, open the `inventory.js` file in your code editor and run it using Node.js. You can call the following functions:
```javascript
findShoe("sandal");
findMin(shoes);
findMax(shoes);
editShoes(shoes, "M4356", "HEELS", "H8017", 5, 45.78);
sortShoes(shoes);
