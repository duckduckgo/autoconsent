import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_solaranlagen-portal.com_m8a', ['https://www.solaranlagen-portal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
