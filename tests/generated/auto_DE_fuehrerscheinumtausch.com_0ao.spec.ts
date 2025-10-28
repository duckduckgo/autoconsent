import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fuehrerscheinumtausch.com_0ao', ['https://fuehrerscheinumtausch.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
