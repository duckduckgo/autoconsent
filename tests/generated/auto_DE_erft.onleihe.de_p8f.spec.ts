import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erft.onleihe.de_p8f', ['https://erft.onleihe.de/erft/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
