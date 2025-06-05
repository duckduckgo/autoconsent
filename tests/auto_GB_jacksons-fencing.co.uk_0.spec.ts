import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_jacksons-fencing.co.uk_0', ['https://www.jacksons-fencing.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
