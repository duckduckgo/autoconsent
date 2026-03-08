import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_disabilityarts.online_8l7', ['https://disabilityarts.online/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
