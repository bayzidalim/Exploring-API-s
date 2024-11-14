const user ={id:1, name: 'Gorib Amir',job:'actor'}
// JavaScript Object Notation
const stringified=JSON.stringify(user);

console.log(stringified);
const shop={
    Owner: 'Alia',
    Address:{
        street:'kochukhet voot er goli',
        city:'ranbir',
        country:'BD'
    },
    Products:['Laptop','mic','monitor','keyboard'
    ],revenue: 45000,
    isOpen:true
};
console.log(shop);
const shopJSON=JSON.stringify(shop);
console.log(shopJSON);
const shopObj=JSON.parse(shopJSON);
console.log(shopObj);

