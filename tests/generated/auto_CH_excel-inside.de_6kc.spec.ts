import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_excel-inside.de_6kc', ['https://excel-inside.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
