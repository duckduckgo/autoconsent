import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_carte-culture.org_kq4', ['https://carte-culture.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
