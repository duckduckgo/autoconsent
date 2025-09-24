import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ukrainianlessons.com_jt4', ['https://www.ukrainianlessons.com/greetings/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
