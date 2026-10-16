import generateCMPTests from '../playwright/runner';

generateCMPTests('Evidon', ['https://www.calor.co.uk/', 'https://www.computershare.com/'], {
    testOptIn: false,
    skipRegions: ['US'],
});
