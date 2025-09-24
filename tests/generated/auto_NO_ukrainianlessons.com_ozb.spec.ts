import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ukrainianlessons.com_ozb', ['https://www.ukrainianlessons.com/greetings/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
