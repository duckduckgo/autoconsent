import generateCMPTests from '../playwright/runner';

generateCMPTests('consent-flo', ['https://goodnightgoodluckbroadway.com/', 'https://everybrilliantthing.com/', 'https://p3.productions/'], {
    testOptIn: false,
});
