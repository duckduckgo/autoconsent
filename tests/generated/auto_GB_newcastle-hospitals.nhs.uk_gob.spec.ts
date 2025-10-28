import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_newcastle-hospitals.nhs.uk_gob', ['https://www.newcastle-hospitals.nhs.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
