import { render, screen } from '@testing-library/react';
import Main from '../components/Main.js';
import { initializeTimesData, updateTimes, fetchTimes } from '../components/Main.js';
import { todayString } from '../api.js';

test('initializeTimes times is array with content', () => {
    const data = initializeTimesData();

    expect(Array.isArray(data.times)).toBeTruthy();
    expect(data.times.length).toBeGreaterThan(0);
})

test('updateTimes returns given times with type:fetch-times-success', ()=> {

    let state = initializeTimesData();

    const dispatchMock = (action) => {
        state = updateTimes(state, action);
    };

    dispatchMock({
        type:"fetch-times-success",
        times: ["2:00", "2:30", "4:00"]
    });

    expect(state.times).toEqual(["2:00", "2:30", "4:00"]);

    dispatchMock({
        type:"bad-tag",
        times: ["1:00", "5:30"]
    });

    expect(state.times).toEqual(["2:00", "2:30", "4:00"]);
})