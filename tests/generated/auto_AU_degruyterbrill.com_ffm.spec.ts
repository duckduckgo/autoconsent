import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_degruyterbrill.com_ffm', ['https://www.degruyterbrill.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
