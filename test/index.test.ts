import {describe, expect, test} from '@jest/globals';

import { greet, goodby } from '../src/index';

describe('', () => {
  it('should say Hello World!', () => {
    const expected = 'Hello World!';
    const result = greet();
    expect(result).toBe(expected)});
});

describe('', () => {
  it('should say Goodby!', () => {
    const expected = 'Goodby!';
    const result = goodby();
    expect(result).toBe(expected)});
});