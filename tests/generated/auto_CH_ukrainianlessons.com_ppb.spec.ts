import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ukrainianlessons.com_ppb', ['https://www.ukrainianlessons.com/greetings/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
