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

var seatac = {
  storeName: 'SeaTac Airport',
  storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 3,
  maxCustomers: 24,
  averageCookies: 1.2,
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
  }
};

var storeList = document.getElementById('seatac');
var storeNameHeader = document.getElementById('seatacHeader');
storeNameHeader.textContent = seatac.storeName;
for (var i = 0; i < seatac.storeHours.length; i++) {
  var hourLi = document.createElement('li');
  hourLi.textContent = seatac.storeHours[i] + ': ' + Math.floor(seatac.cookiesPerHour()) + ' cookies';
  storeList.appendChild(hourLi);
}

var seattle = {
  storeName: 'Seattle Center',
  storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 11,
  maxCustomers: 38,
  averageCookies: 3.7,
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
  }
};

var storeList = document.getElementById('seattle');
var storeNameHeader = document.getElementById('seattleHeader');
storeNameHeader.textContent = seattle.storeName;
for (var i = 0; i < seattle.storeHours.length; i++) {
  var hourLi = document.createElement('li');
  hourLi.textContent = seattle.storeHours[i] + ': ' + Math.floor(seattle.cookiesPerHour()) + ' cookies';
  storeList.appendChild(hourLi);
}

var capitol = {
  storeName: 'Capitol Hill',
  storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 20,
  maxCustomers: 38,
  averageCookies: 2.3,
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
  }
};

var storeList = document.getElementById('capitol');
var storeNameHeader = document.getElementById('capitolHeader');
storeNameHeader.textContent = capitol.storeName;
for (var i = 0; i < capitol.storeHours.length; i++) {
  var hourLi = document.createElement('li');
  hourLi.textContent = capitol.storeHours[i] + ': ' + Math.floor(capitol.cookiesPerHour()) + ' cookies';
  storeList.appendChild(hourLi);
}

var alki = {
  storeName: 'Alki',
  storeHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'],
  minCustomers: 2,
  maxCustomers: 16,
  averageCookies: 4.6,
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
  }
};

var storeList = document.getElementById('alki');
var storeNameHeader = document.getElementById('alkiHeader');
storeNameHeader.textContent = alki.storeName;
for (var i = 0; i < alki.storeHours.length; i++) {
  var hourLi = document.createElement('li');
  hourLi.textContent = alki.storeHours[i] + ': ' + Math.floor(capitol.cookiesPerHour()) + ' cookies';
  storeList.appendChild(hourLi);
}