import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_alexandrapalace.com_v25', ['https://www.alexandrapalace.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
