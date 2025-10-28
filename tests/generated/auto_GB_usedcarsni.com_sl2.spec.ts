import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_usedcarsni.com_sl2', ['https://www.usedcarsni.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
