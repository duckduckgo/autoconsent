import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_disneylandparis.com_njk', ['https://www.disneylandparis.com/en-gb'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
