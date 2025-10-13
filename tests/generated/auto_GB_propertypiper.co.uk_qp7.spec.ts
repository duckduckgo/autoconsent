import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_propertypiper.co.uk_qp7', ['https://propertypiper.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
