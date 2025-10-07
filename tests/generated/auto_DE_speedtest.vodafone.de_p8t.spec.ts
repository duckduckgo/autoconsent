import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_speedtest.vodafone.de_p8t', ['https://speedtest.vodafone.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
