import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jacksons-fencing.co.uk_19l', ['https://www.jacksons-fencing.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
