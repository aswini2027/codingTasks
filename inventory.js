//Object Constructor
function Shoes(Name, ProductCode, Quantity, ValuePerItem){
    this.Name = Name;
    this.ProductCode = ProductCode;
    this.Quantity = Quantity;
    this.ValuePerItem = ValuePerItem;
}

//instances of Shoes object
let shoe1 = new Shoes("PUMP", "P1230", 1, 37.99);
let shoe2 = new Shoes("BOOT", "B4758", 2, 50.00);
let shoe3 = new Shoes("SANDAL", "S9081", 3, 29.99);
let shoe4 = new Shoes("MULE", "M4356", 4, 22.99);
let shoe5 = new Shoes("CLOG", "C0214", 3, 15.99);

//array of objects
let shoes = [shoe1, shoe2, shoe3, shoe4, shoe5];

//function to search for any shoe within the array
function findShoe(shoeName){
    for(let i=0; i<shoes.length; i++){
        let Name = shoes[i].Name;
        if(Name == shoeName.toUpperCase()){
        console.log(`Searched shoe "${shoes[i].Name}" details is listed below: `);
        console.table(shoes[i]);
    }  
    }
}

//function to find the shoe with lowest value per item
function findMin(arr) {
    let minValuePerItem = arr[0].ValuePerItem;
    let minValueShoes = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i].ValuePerItem < minValuePerItem ){
         minValuePerItem = arr[i].ValuePerItem;
         minValueShoes = arr[i];
        }
    }
    console.log(`The minimum ValuePerItem shoe is listed below: `)
    console.table(minValueShoes);
}

//function to find the shoe with highest value per item
function findMax(arr) {
    let maxValuePerItem = arr[0].ValuePerItem;
    let maxValueShoes = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i].ValuePerItem > maxValuePerItem ){
         maxValuePerItem = arr[i].ValuePerItem;
         maxValueShoes = arr[i];
        }
    }
    console.log(`The maximum ValuePerItem shoe is listed below: `)
    console.table(maxValueShoes);
}

//function to edit all four properties of shoe instance
function editShoes(shoes, shoeProductCode, newName, newProductCode, newQuantity, newValuePerItem){
    console.log(`Shoe list before editing ${shoeProductCode} : `);
    console.table(shoes);
    for(let i=0; i < shoes.length; i++){
        if(shoes[i].ProductCode == shoeProductCode){
            shoes[i]["Name"] = newName;
            shoes[i]["ProductCode"] = newProductCode;
            shoes[i]["Quantity"] = newQuantity;
            shoes[i]["ValuePerItem"] = newValuePerItem;
            
            console.log(`Shoe list after editing ${shoeProductCode} to ${shoes[i]["ProductCode"]}: `);
            console.table(shoes);
        }
    }
}

//function to order all objects in ascending order based on "Value Per Item" property
function sortShoes(shoes){
    shoes.sort((a, b) => a.ValuePerItem - b.ValuePerItem);
    console.log("Shoes List sorted in ascending order: ")
    console.table(shoes);
}

//respective function call
findShoe("sandal");
findMin(shoes);
findMax(shoes);
editShoes(shoes,"M4356","HEELS", "H8017",5,45.78);
sortShoes(shoes);