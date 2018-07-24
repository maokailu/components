import React from 'react';
import DateUtil from '../src/utils/date';
describe('A suite', ()=> {
    it('toTimestamp', ()=> {
        expect(DateUtil.toTimestamp('2018-07-21')).toBe(1532131200000);
    });
});
