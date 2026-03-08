import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_csmia-mumbai.adaniairports.com_t0y', ['https://csmia-mumbai.adaniairports.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
