import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ukrainianlessons.com_dwh', ['https://www.ukrainianlessons.com/greetings/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
