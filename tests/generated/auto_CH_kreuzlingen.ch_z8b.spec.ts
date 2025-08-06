import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kreuzlingen.ch_z8b', ['https://www.kreuzlingen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
