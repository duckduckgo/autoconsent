import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kreuzlingen.ch_340', ['https://www.kreuzlingen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
