import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blog.astra.admin.ch_ild', ['https://blog.astra.admin.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
