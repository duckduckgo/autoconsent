import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sk-westerwald-sieg.de_k7o', ['https://www.sk-westerwald-sieg.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
