import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_horoskop-paradies.ch_iut', ['https://www.horoskop-paradies.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
