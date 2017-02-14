'use strict';

var pike = {
  storeName: '1st and Pike',
  storeHours:['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
  }
};

var storeList = document.getElementById('pike');
var storeNameHeader = document.getElementById('pikeHeader');
storeNameHeader.textContent = pike.storeName;
for (var i = 0; i < pike.storeHours.length; i++) {
    var hourLi = document.createElement('li');
    hourLi.textContent = pike.storeHours[i] + ': ' + Math.floor(pike.cookiesPerHour()) + ' cookies';
    storeList.appendChild(hourLi);

  }
