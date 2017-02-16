'use strict';

var coffeeShops = [];

function Store (storeName, minCustomersPerHour, maxCustomersPerHour, aveCookies) {
  this.name = storeName;
  this.hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm'];
  this.minCustomers = minCustomersPerHour;
  this.maxCustomers = maxCustomersPerHour;
  this.averageCookies = aveCookies;
  this.cookiesPerHour = [];
}

Store.prototype.calculateCookiesPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers) * this.averageCookies;
};

Store.prototype.cookiesPerThisHour = function() {
  this.cookiesPerHour = [];
  for (var hour = 0; hour < this.hours.length; hour++) {
    this.cookiesPerHour.push(Math.floor(this.calculateCookiesPerHour()));
  }
  console.log(this.cookiesPerHour);
};


Store.prototype.totalCookiesPerDay = function() {
  var total = 0;
  for (var hour = 0; hour < this.cookiesPerHour.length; hour++){
    total = total + this.cookiesPerHour[hour];
  }
  return total;
};

Store.prototype.render = function() {
  var hourTable = document.getElementById('coffeeshops');
  var hourTr = document.createElement('tr');
  hourTable.appendChild(hourTr);

  // populate hourly array so that we can calculate total
  this.cookiesPerThisHour();

  var hourTd = document.createElement('td');
  hourTd.textContent = this.name;
  hourTr.appendChild(hourTd);

  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    hourTd = document.createElement('td');
    hourTd.textContent = this.cookiesPerHour[i];
    hourTr.appendChild(hourTd);
  }

  hourTd = document.createElement('td');
  hourTd.textContent = this.totalCookiesPerDay();
  hourTr.appendChild(hourTd);
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
coffeeShops.push(pike);
var seatac = new Store('SeaTac Airport', 3, 24, 1.2);
coffeeShops.push(seatac);
var seattle = new Store('Seattle', 11, 38, 3.7);
coffeeShops.push(seattle);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
coffeeShops.push(capitol);
var alki = new Store('Alki', 2, 16, 4.6);
coffeeShops.push(alki);
renderTable();



function addHeadingsToTable () {
  var hours = ['', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm','6:00pm','7:00pm', '8:00pm', 'Total Cookies'];
  var hourTable = document.getElementById('coffeeshops');
  var hourTr = document.createElement('tr');
  hourTable.appendChild(hourTr);

  for (var i = 0; i < hours.length; i++) {
    var hourTh = document.createElement('th');
    hourTh.textContent = hours[i];
    hourTr.appendChild(hourTh);
  }
};

function addFooterRowToTable () {
  var hourTable = document.getElementById('coffeeshops');
  var hourTr = document.createElement('tr');
  hourTable.appendChild(hourTr);

  var hourTd = document.createElement('td');
  hourTd.textContent = 'Totals';
  hourTr.appendChild(hourTd);
};

function renderTable() {
  var oldTable = document.getElementById('coffeeshops');
  oldTable.textContent = '';
  addHeadingsToTable();

  for (var i = 0; i < coffeeShops.length; i++) {
    coffeeShops[i].render();
  };

  addFooterRowToTable();
};

var storeInput = document.getElementById('new_store');
storeInput.addEventListener('submit', submitHandler);

function submitHandler(event) {
  console.log('submit event');
  event.preventDefault();
  var storeName = event.target.store_name.value;
  var minCustomers = parseInt(event.target.min_customers_per_hour.value);
  var maxCustomers = event.target.max_customers_per_hour.value;
  var aveCookies = event.target.ave_cookies_sold_per_hour.value;
  console.log(storeName, minCustomers, maxCustomers, aveCookies);
  var newStore = new Store(storeName, minCustomers, maxCustomers, aveCookies);
  coffeeShops.push(newStore);
  renderTable();
};




