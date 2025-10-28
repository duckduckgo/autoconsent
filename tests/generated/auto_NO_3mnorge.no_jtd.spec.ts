import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_3mnorge.no_jtd', ['https://www.3mnorge.no/3M/no_NO/company-ndc/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
