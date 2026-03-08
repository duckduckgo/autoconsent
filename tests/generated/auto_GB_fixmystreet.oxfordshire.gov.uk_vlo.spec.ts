import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fixmystreet.oxfordshire.gov.uk_vlo', ['https://fixmystreet.oxfordshire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
