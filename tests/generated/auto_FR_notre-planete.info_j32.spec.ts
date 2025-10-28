import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_notre-planete.info_j32', ['https://www.notre-planete.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
