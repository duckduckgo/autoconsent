import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_automateandtweak.com_19o', ['https://automateandtweak.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
