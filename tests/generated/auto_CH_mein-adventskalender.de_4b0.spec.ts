import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mein-adventskalender.de_4b0', ['https://www.mein-adventskalender.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
