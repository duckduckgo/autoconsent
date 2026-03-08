import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_community.amplitude-studios.com_ll7', ['https://community.amplitude-studios.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
