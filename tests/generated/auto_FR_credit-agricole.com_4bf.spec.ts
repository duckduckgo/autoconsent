import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_credit-agricole.com_4bf', ['https://www.credit-agricole.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
