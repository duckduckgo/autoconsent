import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thingiverse.com_5iv', ['https://www.thingiverse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
