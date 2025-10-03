import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_speedtest.vodafone.de_dha', ['https://speedtest.vodafone.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
