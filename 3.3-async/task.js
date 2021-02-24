class AlarmClock {
    constructor(alarmCollection,timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, callback, id) {

            if (!id) {
            throw new Error ("id не передан");
         }
         let bell = this.alarmCollection.some(a => a.id == id) 
            if (bell == true) {
                console.error()
                return;
            }

            let clock = new Object();
            clock.id = id;
            clock.callback = callback;
            clock.time = time;
            this.alarmCollection.push(clock);
    };

    removeClock(id) {
         let bellDelete = this.alarmCollection.filter(a => a.id != id);
        this.alarmCollection = bellDelete;
    };

    getCurrentFormattedTime() {
        let currentDate = new Date();
        return currentDate.getHours() + ":" + currentDate.getMinutes();
    };

    start() {
        function checkClock(obj) {
            if(getCurrentFormattedTime() === obj.time) {
                let a = obj.callback;
                a();
            }
        }
        if (this.timerId === undefined) {
            this.timerId = setInterval (() => {
                this.alarmCollection.map(checkClock)
            }, 1000);
        }
    }

    stop() {
        if (this.timerId != undefined) {
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
         stop();
         this.alarmCollection = [];
     }
}


function testCase () {
    let alarm = new AlarmClock();
    alarm.addClock("10:00", () => console.log('Вставай!'), 1);
    alarm.addClock("10:15", () => console.log('Хватит спать!!!'), 2);
    alarm.addClock(11.00, () => console.log('Проспал :('));
    alarm.addClock("10:01", () => {console.log('Вставай'); alarm.removeClock(2)}, 2);
    alarm.addClock("10:02", () => {console.log('Вставай'), alarm.clearAlarms(), alarm.printAlarms()}, 3);
    alarm.printAlarms();
    alarm.start();
}


testCase();