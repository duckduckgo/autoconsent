import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_arbetsgivarverket.se_s4o', ['https://www.arbetsgivarverket.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
