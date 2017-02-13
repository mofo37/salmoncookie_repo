'use strict';

var pike = {
  storeName: '1st and Pike',
  storeHours:['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3, 
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
    
}
  
  
  
  
  
//   generateStoreList: funtion() {
//     var storeList = document.getElementById('Pike');
//     var storeNameLi = document.createElement('li');
//     storeNameLi.textContext = this.storeName;
//     storeList.appendChild(storeNameLi);
//     var hourLi;
//     for (var i=0; i<this.storeHours.length; i++) {
//       hourLi = document.createElement('li');
//       hourLi.textcontent = this.randomNumber();
//       storeList.appendChild(hourLi);
//     }
//   }
};
  console.log(pike.randomNumber());