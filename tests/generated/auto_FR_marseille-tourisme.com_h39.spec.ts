import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_marseille-tourisme.com_h39', ['https://www.marseille-tourisme.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
