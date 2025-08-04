import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_viamichelin.com_1hf', ['https://www.viamichelin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
