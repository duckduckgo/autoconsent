import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tartanheartfestival.com_76n', ['https://tartanheartfestival.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
