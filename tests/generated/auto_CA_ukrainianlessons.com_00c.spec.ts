import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ukrainianlessons.com_00c', ['https://www.ukrainianlessons.com/greetings/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
