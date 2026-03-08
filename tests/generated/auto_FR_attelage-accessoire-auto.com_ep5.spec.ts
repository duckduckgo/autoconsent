import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_attelage-accessoire-auto.com_ep5', ['https://attelage-accessoire-auto.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
