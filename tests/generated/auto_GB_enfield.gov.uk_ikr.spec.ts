import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_enfield.gov.uk_ikr', ['https://www.enfield.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
