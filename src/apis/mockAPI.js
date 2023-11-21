// Created by Omar Gaafar 08/30/2023

// Modified by Kanayo Emenike 11/19/2023
// Reason for modification
// Original API status didn't allow for flexable dates.
// It only worked between 8/29/23 - 9/20/23
// New Edit will allow for the api to add dates if they haven't existed before.

// Changed const to let to allow additions by function fetchAPI()s
let availableTimesByDate = {}; // Removed default values.

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else if (!availableTimesByDate[date]) {
        //Checks to see if the date is in object, if not then add it with default times.
        availableTimesByDate = {
          ...availableTimesByDate,
          [date]: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
        }
        resolve(availableTimesByDate[date]);
      } else {
        //
        reject(new Error("No available times for the selected date."));
      }
    }, 1000);
  });
};

const submitAPI = (formData) => {
  availableTimesByDate[formData.date] = availableTimesByDate[
    formData.date
  ].filter((time) => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};

export { fetchAPI, submitAPI };
