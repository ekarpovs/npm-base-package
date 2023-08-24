import {describe, expect, test} from '@jest/globals';

import { helloWorld } from '../src/index';

describe('', () => {
  it('should say Hello World', () => {
    const expected = 'Hello World';
    const result = helloWorld();
    expect(result).toBe(expected)});
});