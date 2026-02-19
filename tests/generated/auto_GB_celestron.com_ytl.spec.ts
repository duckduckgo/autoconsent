import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_celestron.com_ytl', ['https://www.celestron.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
