import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_commune-latena.ch_wcf', ['https://commune-latena.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
