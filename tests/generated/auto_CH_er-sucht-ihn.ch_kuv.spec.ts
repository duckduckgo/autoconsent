import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_er-sucht-ihn.ch_kuv', ['https://er-sucht-ihn.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
