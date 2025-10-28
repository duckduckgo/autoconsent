import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_steelseries.com_7qx', ['https://steelseries.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
