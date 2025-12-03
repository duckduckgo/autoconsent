import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sportpursuit.com_0', ['https://www.sportpursuit.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
