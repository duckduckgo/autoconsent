import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ca-nextbank.ch_ofp', ['https://www.ca-nextbank.ch/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
