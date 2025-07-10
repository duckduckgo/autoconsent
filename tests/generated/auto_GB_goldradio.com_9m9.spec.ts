import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_goldradio.com_9m9', ['https://www.goldradio.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
