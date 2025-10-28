import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airfryerrezepte.net_ibk', ['https://www.airfryerrezepte.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
