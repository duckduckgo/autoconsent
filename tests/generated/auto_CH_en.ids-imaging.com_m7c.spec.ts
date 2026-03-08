import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_en.ids-imaging.com_m7c', ['https://en.ids-imaging.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
