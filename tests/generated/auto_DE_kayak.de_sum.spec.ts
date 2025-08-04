import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kayak.de_sum', ['https://www.kayak.de/?ispredir=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
