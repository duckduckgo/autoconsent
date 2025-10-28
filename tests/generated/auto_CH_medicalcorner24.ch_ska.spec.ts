import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_medicalcorner24.ch_ska', ['https://www.medicalcorner24.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
