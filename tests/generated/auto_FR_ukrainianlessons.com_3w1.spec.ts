import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ukrainianlessons.com_3w1', ['https://www.ukrainianlessons.com/greetings/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
