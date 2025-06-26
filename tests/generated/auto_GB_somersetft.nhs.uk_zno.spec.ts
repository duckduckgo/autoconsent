import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_somersetft.nhs.uk_zno', ['https://www.somersetft.nhs.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
