// Created by Omar Gaafar 08/30/2023

// Modified by Kanayo Emenike 11/19/2023
  // Reason for modification
    // Original API status didn't allow for flexable dates.
      // It only worked between 8/29/23 - 9/20/23
    // New Edit will allow for the api to add dates if they haven't existed before.

// Changed const to let to allow additions by function fetchAPI()s
let availableTimesByDate = {
  '2023-08-29': ['10:00', '11:00', '12:00'],
  '2023-09-01': ['10:00', '11:00', '12:00'],
  '2023-09-02': ['14:00', '15:00', '16:00'],
  '2023-09-03': ['10:00', '11:00', '12:00'],
  '2023-09-04': ['14:00', '15:00', '16:00'],
  '2023-09-05': ['10:00', '11:00', '12:00'],
  '2023-09-06': ['14:00', '15:00', '16:00'],
  '2023-09-07': ['10:00', '11:00', '12:00'],
  '2023-09-08': ['14:00', '15:00', '16:00'],
  '2023-09-09': ['10:00', '11:00', '12:00'],
  '2023-09-10': ['14:00', '15:00', '16:00'],
  '2023-09-11': ['10:00', '11:00', '12:00'],
  '2023-09-12': ['14:00', '15:00', '16:00'],
  '2023-09-13': ['10:00', '11:00', '12:00'],
  '2023-09-14': ['14:00', '15:00', '16:00'],
  '2023-09-15': ['10:00', '11:00', '12:00'],
  '2023-09-16': ['14:00', '15:00', '16:00'],
  '2023-09-17': ['10:00', '11:00', '12:00'],
  '2023-09-18': ['14:00', '15:00', '16:00'],
  '2023-09-19': ['10:00', '11:00', '12:00'],
  '2023-09-20': ['14:00', '15:00', '16:00'],
};


const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
      setTimeout(() =>{
          if(availableTimesByDate.date){
              resolve(availableTimesByDate[date])
          } else if (!availableTimesByDate.date) {
            // ADDED: if statement to check if key existed before.
            availableTimesByDate = {
              ...availableTimesByDate,
              date: ['17', '18', '19', '20', '21', '22'],
            }
          }
          else{
              reject(new Error('No available times for the selected date.'));
          }
      } , 1000)
  })
}

const submitAPI = (formData) => {

  availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error('Form submission failed.'));
      }
    }, 1000); // Simulate API delay
  });
};

export{fetchAPI,submitAPI}