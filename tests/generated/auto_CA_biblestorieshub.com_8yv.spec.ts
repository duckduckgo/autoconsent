import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_biblestorieshub.com_8yv', ['https://biblestorieshub.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
