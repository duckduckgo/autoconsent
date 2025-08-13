import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kreuzlingen.ch_5px', ['https://www.kreuzlingen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
