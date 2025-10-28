import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_new.calderdale.gov.uk_tpv', ['https://new.calderdale.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
