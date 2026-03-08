import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_careers.epfl.ch_2qx', ['https://careers.epfl.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
