import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gibson.com_8bu', ['https://www.gibson.com/en-US/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
