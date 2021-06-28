let currentDate = new Date();

module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour > 16 && hour < 23) return 'Good evening ' + name;
    else if (hour > 6 && hour < 17) return 'Good morning ' + name;
    else return 'Good night ' + name;
}
