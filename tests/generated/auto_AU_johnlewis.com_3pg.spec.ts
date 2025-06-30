import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_johnlewis.com_3pg', ['https://www.johnlewis.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
