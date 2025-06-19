import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_canon-europe.com_6hn', ['https://www.canon-europe.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
