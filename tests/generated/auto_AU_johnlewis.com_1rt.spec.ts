import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_johnlewis.com_1rt', ['https://www.johnlewis.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
