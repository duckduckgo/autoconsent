import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_circus-monti.ch_kw9', ['https://circus-monti.ch/portal/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
