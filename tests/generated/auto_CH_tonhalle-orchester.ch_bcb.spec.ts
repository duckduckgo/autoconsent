import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tonhalle-orchester.ch_bcb', ['https://www.tonhalle-orchester.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
