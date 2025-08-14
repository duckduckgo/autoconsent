import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_espboards.dev_kya', ['https://www.espboards.dev/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
