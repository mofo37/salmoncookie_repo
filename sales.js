'use strict';

var pike = {
  id: 'pike',
  storeName: '1st and Pike',
  storeHours:['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,
  cookiesPerHour: [],
  calculateCookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
  }
};

var seatac = {
  id: 'seatac',
  storeName: 'SeaTac Airport',
  storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 3,
  maxCustomers: 24,
  averageCookies: 1.2,
  cookiesPerHour: [],
  calculateCookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
  }
};

var seattle = {
  id: 'seattle',
  storeName: 'Seattle Center',
  storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 11,
  maxCustomers: 38,
  averageCookies: 3.7,
  cookiesPerHour: [],
  calculateCookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
  }
};

var capitol = {
  id: 'capitol',
  storeName: 'Capitol Hill',
  storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 20,
  maxCustomers: 38,
  averageCookies: 2.3,
  cookiesPerHour: [],
  calculateCookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
  }
};

var alki = {
  id: 'alki',
  storeName: 'Alki',
  storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 2,
  maxCustomers: 16,
  averageCookies: 4.6,
  cookiesPerHour: [],
  calculateCookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
  }
};

var coffeeShops = [pike, seatac, seattle, capitol, alki];

for (var i = 0; i < coffeeShops.length; i++) {
  var shop = coffeeShops[i];

  var storeList = document.getElementById(shop.id);
  var storeNameHeader = document.getElementById(shop.id + 'Header');
  storeNameHeader.textContent = shop.storeName;

  for (var hour = 0; hour < shop.storeHours.length; hour++) {
    var cookiesPerThisHour = shop.storeHours[i] + ': ' + Math.floor(shop.calculateCookiesPerHour()) + ' cookies';
    shop.cookiesPerHour.push(cookiesPerThisHour);

    var hourLi = document.createElement('li');
    hourLi.textContent = cookiesPerThisHour;
    storeList.appendChild(hourLi);
  }
};