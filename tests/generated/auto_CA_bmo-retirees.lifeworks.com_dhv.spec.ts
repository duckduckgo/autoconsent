import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bmo-retirees.lifeworks.com_dhv', ['https://bmo-retirees.lifeworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
