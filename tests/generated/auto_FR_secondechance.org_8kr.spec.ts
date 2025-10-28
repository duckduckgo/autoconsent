import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_secondechance.org_8kr', ['https://www.secondechance.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
