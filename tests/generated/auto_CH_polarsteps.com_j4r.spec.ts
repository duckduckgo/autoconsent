import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_polarsteps.com_j4r', ['https://www.polarsteps.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
