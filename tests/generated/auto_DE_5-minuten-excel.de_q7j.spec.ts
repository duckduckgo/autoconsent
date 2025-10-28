import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_5-minuten-excel.de_q7j', ['https://5-minuten-excel.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
