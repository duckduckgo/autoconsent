import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_culturevelo.com_24z', ['https://www.culturevelo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
