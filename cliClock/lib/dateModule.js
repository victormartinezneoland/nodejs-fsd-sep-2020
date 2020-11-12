
const dateModule = {
    dateString: function() {
        const timeNow = new Date();
        const day = timeNow.getDate().toString();
        const month = (timeNow.getMonth() + 1).toString();
        const year = timeNow.getFullYear().toString();
        const hour = timeNow.getHours().toString();
        const minutes = timeNow.getMinutes().toString();
        const seconds = timeNow.getSeconds().toString();
        return `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;
    }  
};

module.exports = dateModule;