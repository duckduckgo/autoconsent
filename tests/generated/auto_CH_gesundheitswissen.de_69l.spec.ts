import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gesundheitswissen.de_69l', ['https://www.gesundheitswissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
