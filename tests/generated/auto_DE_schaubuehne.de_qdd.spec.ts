import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schaubuehne.de_qdd', ['https://www.schaubuehne.de/de/start/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
