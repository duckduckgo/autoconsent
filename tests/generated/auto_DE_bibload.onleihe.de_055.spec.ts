import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bibload.onleihe.de_055', ['https://bibload.onleihe.de/bibload/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
