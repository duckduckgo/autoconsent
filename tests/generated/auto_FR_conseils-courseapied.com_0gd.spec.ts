import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_conseils-courseapied.com_0gd', ['https://www.conseils-courseapied.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
