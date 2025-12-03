import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_architectes.org_5e1', ['https://www.architectes.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
