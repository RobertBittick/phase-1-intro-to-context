// Your code here

function createEmployeeRecord(array) {
   return {
    firstName : array[0],
    familyName : array[1],
    title : array[2],
    payPerHour : array[3],
    timeInEvents : [],
    timeOutEvents : [],
    }
}

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(array => createEmployeeRecord(array))
}

function createTimeInEvent (employee, dateStamp) {
    const [date,hour] = (dateStamp.split(' '))
    employee.timeInEvents.push({
    type : 'TimeIn',
    hour : parseInt(hour,10),
    date : date,
 })
 return employee
}

function createTimeOutEvent (employee, dateStamp) {
    const [date,hour] = dateStamp.split(' ')
    employee.timeOutEvents.push({
        type : 'TimeOut',
        hour : parseInt(hour,10),
        date : date,
    })
    return employee
}

function hoursWorkedOnDate(employee, date) {
   const timeInEvent =  employee.timeInEvents.find((timeIn) => { return timeIn.date === date})
   const timeOutEvent =  employee.timeOutEvents.find((timeOut) => { return timeOut.date === date})
   const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100
    return hoursWorked
}

function wagesEarnedOnDate(employee,date) {
    const payOwed = employee.payPerHour * hoursWorkedOnDate(employee,date)
        return payOwed
}

function allWagesFor(employee) {
    console.log('log 1',employee.timeInEvents.find((TimeIn) => { return TimeIn}))

    
    // const payOwedAllDates = 
    //     console.log(payOwedAllDates)
    
}