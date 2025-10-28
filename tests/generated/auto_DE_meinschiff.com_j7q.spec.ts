import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meinschiff.com_j7q', ['https://www.meinschiff.com/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
