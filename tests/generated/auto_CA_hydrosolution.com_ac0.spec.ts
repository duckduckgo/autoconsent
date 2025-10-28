import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hydrosolution.com_ac0', ['https://www.hydrosolution.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
