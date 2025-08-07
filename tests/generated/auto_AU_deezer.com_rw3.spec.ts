import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_deezer.com_rw3', ['https://www.deezer.com/us/offers'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
