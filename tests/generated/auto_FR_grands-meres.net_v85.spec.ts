import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_grands-meres.net_v85', ['https://www.grands-meres.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
