import { Injectable } from '@angular/core';

Injectable();
export class followerService {

  getAll(){
    return [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          mobile: '1234567890',
          address: 'New York',
          image: 'http://wildworkoutsandwellness.com/wp-content/uploads/2013/07/Placeholder-Portrait-300x300.jpg'
        },
        {
          id: 2,
          name: 'Sagar Kale',
          email: 'skale@gmail.com',
          mobile: '9988556622',
          address: 'Pune',
          image: 'http://wildworkoutsandwellness.com/wp-content/uploads/2013/07/Placeholder-Portrait-300x300.jpg'
        },
        {
          id: 3,
          name: 'Amrut Mohite',
          email: 'amrut@gmail.com',
          mobile: '7895874623',
          address: 'Sangli',
          image: 'http://wildworkoutsandwellness.com/wp-content/uploads/2013/07/Placeholder-Portrait-300x300.jpg'
        },
        {
          id: 4,
          name: 'Rohit Shinde',
          email: 'rohitshinde@gmail.com',
          mobile: '8798658472',
          address: 'Kolhapur',
          image: 'http://wildworkoutsandwellness.com/wp-content/uploads/2013/07/Placeholder-Portrait-300x300.jpg'
        },
        {
          id: 5,
          name: 'Amit Takale',
          email: 'amitt@gmail.com',
          mobile: '7387571711',
          address: 'Satara',
          image: 'http://wildworkoutsandwellness.com/wp-content/uploads/2013/07/Placeholder-Portrait-300x300.jpg'
        }];
  }

}
