import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_visitoslofjorden.no_hf6', ['https://www.visitoslofjorden.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
