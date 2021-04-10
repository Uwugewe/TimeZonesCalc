let viewTimeDiv = document.querySelector('.view-time');
let options = document.querySelectorAll('option');
let select = document.querySelector('select');
let timeZones = []

for(let i = -12; i <= 12; i++) {
    timeZones.push(i);
}

class City {
    constructor(cityName, GMT) {
        this.cityName = cityName;
        this.GMT = GMT;
        this.zeroDateMs = new Date().getTime() + (new Date().getTimezoneOffset() * 60 * 1000);
        this.date = '';
        this.time();
    }
    time(gmtParameter){
        timeZones.forEach(gmt => {
            if(gmtParameter === gmt) {
                this.date = new Date(this.zeroDateMs + gmt * 60 * 60 * 1000).toString().substr(0,25);
                console.log(this.date);
            } else {
                let validationError = '<h1>Podano nieprawidłową strefę czasową GMT</h1>'
                console.log(validationError);
            }
        });
    }
}

let warsaw = new City('Warsaw', 2);
console.log(warsaw);

  