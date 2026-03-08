import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_brunner-ferienreisen.ch_gsl', ['https://brunner-ferienreisen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
