import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_auraframes.com_48h', ['https://auraframes.co.uk/?country_set=GB'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
