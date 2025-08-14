import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_voebb.onleihe.de_jf0', ['https://voebb.onleihe.de/berlin/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
