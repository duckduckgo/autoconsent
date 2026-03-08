import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_continentalhydraulics.com_nfi', ['https://continentalhydraulics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
