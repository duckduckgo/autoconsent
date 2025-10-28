import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_clever-fit.com_bhg', ['https://www.clever-fit.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
