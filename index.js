/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 function createEmployeeRecord (array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function  createEmployeeRecords(array){
    
return array.map(element=>createEmployeeRecord(element));
    
}

function createTimeInEvent ( Date) {
    const dateAndHour = Date.split(' ');
    const date = dateAndHour[0];
    const hour = parseInt(dateAndHour[1], 10);
  

    if (!isNaN(hour)) {
    
      const timeInEvent = {
        type: 'TimeIn',
        hour: hour,
        date: date,
      };
  
      
      this.timeInEvents.push(timeInEvent);
    }
  
    return this;
  }
  


  
  function createTimeOutEvent( Date) {
   
    const dateAndHour = Date.split(' ');
    const date = dateAndHour[0];
    const hour = parseInt(dateAndHour[1], 10);
  
  
    if (!isNaN(hour)) {
   
      const timeOutEvent = {
        type: 'TimeOut',
        hour: hour,
        date: date,
      };
  
      this.timeOutEvents.push(timeOutEvent);
    }
  
    return this;
  }
  
  

  function hoursWorkedOnDate( date) {

    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  
    if (timeInEvent && timeOutEvent) {
      const hoursWorked = timeOutEvent.hour - timeInEvent.hour;
      return hoursWorked/ 100;
    }
  
    return false;
    
  }


  function wagesEarnedOnDate ( dateE){
    const hoursWorked = hoursWorkedOnDate.call(this, dateE);
    const total = hoursWorked * this.payPerHour;
  
    return total;
}


let findEmployeeByFirstName = function(srcArray, firstName) {
    const nameFound= srcArray.find((element)=>{
      return element.firstName === firstName
    })
    return nameFound;
  }
  


  function calculatePayroll(employees) {
    let totalPayroll = 0;
  
    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      const totalWages = allWagesFor.call(employee);
      totalPayroll += totalWages;
    }
  
    return totalPayroll;
  }

