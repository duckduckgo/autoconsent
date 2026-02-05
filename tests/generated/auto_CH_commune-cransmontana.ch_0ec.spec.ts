import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_commune-cransmontana.ch_0ec', ['https://www.commune-cransmontana.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
