import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_viamichelin.com_8aq', ['https://www.viamichelin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
