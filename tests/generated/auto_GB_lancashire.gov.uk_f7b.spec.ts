import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lancashire.gov.uk_f7b', ['https://www.lancashire.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
