const fs = require('fs');
const dateModule = require('./lib/dateModule');

const interval = process.argv[2];

const app = {
    config: {
        interval: interval
    },
    printDate: function() {
        console.log(dateModule.dateString());
    },
    timeLoop: function() {
        setInterval(app.printDate, app.config.interval);
    }
};

app.timeLoop();