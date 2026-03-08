import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_coban-kurzwaren.de_dw8', ['https://coban-kurzwaren.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
