import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_24h-lemans.com_2ab', ['https://www.24h-lemans.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
