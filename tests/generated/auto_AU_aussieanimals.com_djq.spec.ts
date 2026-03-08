import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aussieanimals.com_djq', ['https://aussieanimals.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
