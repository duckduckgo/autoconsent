import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_beersofeurope.co.uk_tt2', ['https://www.beersofeurope.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
