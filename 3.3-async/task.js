class AlarmClock {
    constructor(alarmCollection,timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, callback, id) {

            if (!id) {
            throw new Error ("id не передан");
         }
         if (this.alarmCollection.some(a => a.id == id)) {
               return console.error();
            }

            this.alarmCollection.push({id, time, callback});
    };

    removeClock(id) {
        let arrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(a => a.id != id);
        if (arrLength != this.alarmCollection.length) {
            return true;
        } else {
            false;
        }
        
    };

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru", { hour12 : false}).slice(0,-3);
        
    };

    start() {
        
        const checkClock = (obj) => {
            if(this.getCurrentFormattedTime() === obj.time) {
                obj.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval (() => {
                this.alarmCollection.forEach(checkClock)
            }, 1000);
        }
    }

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId)
            this.timerId = null;
        }
    }
     printAlarms() {
         this.alarmCollection.forEach(function (item ) {
             console.log(item.id + ' ' + item.time);
         });
     };

     clearAlarms() {
         this.stop();
         this.alarmCollection = [];
         
     }
}


function testCase () {
    let alarm = new AlarmClock();
    alarm.addClock("10:00", () => console.log('Вставай!'), 1);
    alarm.addClock("10:15", () => console.log('Хватит спать!!!'), 2);
    alarm.addClock("11:00", () => console.log('Проспал :('));
    alarm.addClock("10:01", () => {console.log('Вставай'); alarm.removeClock(2)}, 2);
    alarm.addClock("10:02", () => {console.log('Вставай'), alarm.clearAlarms(), alarm.printAlarms()}, 3);
    alarm.printAlarms();
    alarm.start();
}


testCase();