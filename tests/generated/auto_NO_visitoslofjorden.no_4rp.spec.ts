import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_visitoslofjorden.no_4rp', ['https://www.visitoslofjorden.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
