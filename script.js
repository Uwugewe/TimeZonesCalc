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
        this.time(this.GMT);
    }
    time(gmtParameter){

        timeZones.forEach(gmt => {
            if(gmtParameter === gmt) {
                this.date = new Date(this.zeroDateMs + gmt * 60 * 60 * 1000).toString().substr(0,25);
            }
        });
    }
}

let warsaw = new City('Warsaw', 2);
console.log(warsaw);

let moscow = new City('Moscow', 4);
console.log(moscow);

let NewYork = new City('New York', 6);
console.log(NewYork);

  