import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tgv-lyria.com_g4g', ['https://www.tgv-lyria.com/ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
