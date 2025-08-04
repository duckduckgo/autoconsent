import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kayak.de_evf', ['https://www.kayak.de/?ispredir=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
