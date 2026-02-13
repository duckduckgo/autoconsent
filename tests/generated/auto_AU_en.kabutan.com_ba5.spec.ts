import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_en.kabutan.com_ba5', ['https://en.kabutan.com/jp'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
