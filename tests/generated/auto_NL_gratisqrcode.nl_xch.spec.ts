import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gratisqrcode.nl_xch', ['https://gratisqrcode.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
