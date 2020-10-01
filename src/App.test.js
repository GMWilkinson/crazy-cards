import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import App from './App';
import Application from './pages/Application';
import checkData from '../server/lib/checkData';
import calculateAge from './lib/calculateAge';
import Cards from '../server/api/availableCards';
import FormInput from './components/FormInput';
import FormSelect from './components/FormSelect';

jest.mock('axios');

const userData = {
  name: 'test',
  dob: '1950-06-22',
  age: 70,
  doorNumber: '19a',
  postcode: 'se8 2pk',
  annualIncome: '19000',
  employmentStatus: 'Full Time'
};

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

describe('checkData function', () => {
  test('returns an object array of correct length', () => {
    const testCardData = Cards;
    const testUserData = Object.entries(userData);
    const result = checkData(testCardData, testUserData);
    expect(typeof result).toBe('object');
    expect(result.length).toBe(3);
  });
});

describe('calculateAge function', () => {
  test('returns a number', () => {  
  const result = calculateAge('1950-06-22');
  expect(typeof result).toBe('number');
  });
});

describe('Application', () => {
  test('fill all fields message not displayed', () => {
    render(<Application />);    
    expect(screen.queryByText(/You must complete all fields/i)).toBeNull();

  });
});

describe('Api', () => {
  test('should fetch cards', () => {
    const resp = {data: Cards};
    axios.get.mockResolvedValue(resp);
  });
});

describe('FormInput', () => {
  test('renders correctly', () => {
    render(<FormInput labelName="Test Input Label"/>);
    expect(screen.getByText(/Test Input Label/)).toBeInTheDocument();
  });
});

describe('FormSelect', () => {
  test('renders correctly and shows correct options', () => {
    render(<FormSelect labelName="Test Select Label" options={['Full Time', 'Part Time']} />);
    expect(screen.queryByText(/Test Select Label/)).toBeInTheDocument();
    expect(screen.queryByText(/Full Time/)).toBeInTheDocument();
    expect(screen.queryByText(/Part Time/)).toBeInTheDocument();
  });
});