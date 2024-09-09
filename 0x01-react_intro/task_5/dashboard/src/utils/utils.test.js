import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import React from 'react';

test('getFullYear', () => {
  const expectedyear = new Date().getFullYear();
  expect(getFullYear()).toBe(expectedyear);
});

describe('getFooterCopy', () => {
  test('with isIndex = true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('with isIndex = false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

test('getLatestNotification', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
