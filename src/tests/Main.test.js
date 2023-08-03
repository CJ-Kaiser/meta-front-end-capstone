import { render, screen } from '@testing-library/react';
import Main from '../components/Main.js';
import { initializeTimes, updateTimes } from '../components/Main.js';

test('initializeTimes returns expected values', () => {
    expect(initializeTimes()).toEqual([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ]);
    
})

test('updateTimes returns given state', ()=> {
    let state = [
        "1:00",
        "2:00",
        "3:00",
    ]

    expect(updateTimes(state, {type: 'changed-date'})).toEqual([
        "1:00",
        "2:00",
        "3:00",
    ])
})