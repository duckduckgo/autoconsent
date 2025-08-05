import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_degruyterbrill.com_66w', ['https://www.degruyterbrill.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
