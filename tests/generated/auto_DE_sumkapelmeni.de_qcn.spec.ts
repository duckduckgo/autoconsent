import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sumkapelmeni.de_qcn', ['https://sumkapelmeni.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
