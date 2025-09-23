import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mrmarvis.com_bo5', ['https://www.mrmarvis.com/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
