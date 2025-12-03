import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lausannemusees.ch_h7a', ['https://lausannemusees.ch/fr_CH'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
