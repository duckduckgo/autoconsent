import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_admin.hostpoint.ch_evz', ['https://admin.hostpoint.ch/public/en/auth/hostpoint'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
