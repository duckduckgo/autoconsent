import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_filmdienst.de_exj', ['https://www.filmdienst.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
