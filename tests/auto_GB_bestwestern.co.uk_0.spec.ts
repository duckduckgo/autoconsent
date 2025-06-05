import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_bestwestern.co.uk_0', ['https://www.bestwestern.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
