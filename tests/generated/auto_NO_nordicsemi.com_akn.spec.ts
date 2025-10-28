import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nordicsemi.com_akn', ['https://www.nordicsemi.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
