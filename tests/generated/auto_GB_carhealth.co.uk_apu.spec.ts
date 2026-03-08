import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_carhealth.co.uk_apu', ['https://carhealth.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
