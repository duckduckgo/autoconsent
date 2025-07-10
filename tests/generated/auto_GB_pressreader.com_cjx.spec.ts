import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pressreader.com_cjx', ['https://www.pressreader.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
