import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_philosophia-perennis.com_zbh', ['https://philosophia-perennis.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
