import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_buell-parts.com_kue', ['https://buell-parts.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
