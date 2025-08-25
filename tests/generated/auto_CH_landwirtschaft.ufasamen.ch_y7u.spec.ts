import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_landwirtschaft.ufasamen.ch_y7u', ['https://landwirtschaft.ufasamen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
