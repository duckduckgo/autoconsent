import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aquabasilea.ch_4ts', ['https://www.aquabasilea.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
