import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_muckbootcompany.co.uk_ywf', ['https://muckbootcompany.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
