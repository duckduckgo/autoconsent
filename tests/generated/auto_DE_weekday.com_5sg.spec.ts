import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_weekday.com_5sg', ['https://www.weekday.com/de-de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
