import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_churchsuite.com_rso', ['https://churchsuite.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
