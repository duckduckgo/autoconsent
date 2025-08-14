import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ge.xhamster.desi_76s', ['https://ge.xhamster.desi/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
