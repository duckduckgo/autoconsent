import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rlp.onleihe.de_0jv', ['https://rlp.onleihe.de/rlp/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
