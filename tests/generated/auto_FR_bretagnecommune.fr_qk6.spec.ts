import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bretagnecommune.fr_qk6', ['https://bretagnecommune.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
