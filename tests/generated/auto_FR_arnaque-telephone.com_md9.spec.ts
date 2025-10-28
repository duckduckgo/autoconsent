import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arnaque-telephone.com_md9', ['https://arnaque-telephone.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
