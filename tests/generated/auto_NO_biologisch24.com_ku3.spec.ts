import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_biologisch24.com_ku3', ['https://biologisch24.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
