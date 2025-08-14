import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tonhalle-orchester.ch_u49', ['https://www.tonhalle-orchester.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
