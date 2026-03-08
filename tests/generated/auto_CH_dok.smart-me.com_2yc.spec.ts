import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dok.smart-me.com_2yc', ['https://dok.smart-me.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
