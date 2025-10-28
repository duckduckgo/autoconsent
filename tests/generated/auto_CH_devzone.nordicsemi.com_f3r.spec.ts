import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_devzone.nordicsemi.com_f3r', ['https://devzone.nordicsemi.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
