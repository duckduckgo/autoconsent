import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stroud.gov.uk_sb7', ['https://www.stroud.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
