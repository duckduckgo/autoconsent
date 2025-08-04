import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_viamichelin.com_vi1', ['https://www.viamichelin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
