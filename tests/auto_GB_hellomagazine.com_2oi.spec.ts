import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_hellomagazine.com_2oi', ['https://www.hellomagazine.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
