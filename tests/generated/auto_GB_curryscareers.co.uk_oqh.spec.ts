import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_curryscareers.co.uk_oqh', ['https://curryscareers.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
