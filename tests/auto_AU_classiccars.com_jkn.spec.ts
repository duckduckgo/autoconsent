import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_classiccars.com_jkn', ['https://classiccars.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
