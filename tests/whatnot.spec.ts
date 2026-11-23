import generateCMPTests from '../playwright/runner';

generateCMPTests('whatnot', ['https://www.whatnot.com/'], { skipRegions: ['US'] });
