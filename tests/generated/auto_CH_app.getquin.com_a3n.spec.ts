import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_app.getquin.com_a3n', ['https://app.getquin.com/en/dashboard'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
