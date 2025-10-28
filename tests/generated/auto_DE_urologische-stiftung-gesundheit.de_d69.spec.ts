import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_urologische-stiftung-gesundheit.de_d69', ['https://urologische-stiftung-gesundheit.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
