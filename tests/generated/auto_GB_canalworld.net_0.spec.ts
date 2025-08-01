import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_canalworld.net_0', ['https://www.canalworld.net/forums/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
