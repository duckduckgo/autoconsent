import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erotische-hypnose.com_rma', ['https://erotische-hypnose.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
