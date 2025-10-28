import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nikon-fotografie.de_crv', ['https://www.nikon-fotografie.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
