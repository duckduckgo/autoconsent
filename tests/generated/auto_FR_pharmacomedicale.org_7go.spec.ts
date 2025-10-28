import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pharmacomedicale.org_7go', ['https://pharmacomedicale.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
