import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kayak.de_fh2', ['https://www.kayak.de/?ispredir=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
