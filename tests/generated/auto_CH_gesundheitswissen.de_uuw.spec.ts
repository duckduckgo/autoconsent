import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gesundheitswissen.de_uuw', ['https://www.gesundheitswissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
