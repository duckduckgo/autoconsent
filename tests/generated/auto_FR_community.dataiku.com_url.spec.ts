import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_community.dataiku.com_url', ['https://community.dataiku.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
