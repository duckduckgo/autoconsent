import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bergenbyguide.no_o5w', ['https://bergenbyguide.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
