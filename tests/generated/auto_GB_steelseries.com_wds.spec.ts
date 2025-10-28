import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_steelseries.com_wds', ['https://steelseries.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
