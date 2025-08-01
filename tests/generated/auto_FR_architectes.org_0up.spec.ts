import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_architectes.org_0up', ['https://www.architectes.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
