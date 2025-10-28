import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_images.google.com_0yw', ['https://images.google.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
