import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_brilliant-ag.com_vsb', ['https://brilliant-ag.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
