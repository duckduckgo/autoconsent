import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_incontriamoci.xxx_whp', ['https://incontriamoci.xxx/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
