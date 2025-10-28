import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_laeckerli-huus.ch_dhq', ['https://www.laeckerli-huus.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
