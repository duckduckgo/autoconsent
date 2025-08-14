import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_filmdienst.de_2zh', ['https://www.filmdienst.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
