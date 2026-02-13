import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_muckbootcompany.co.uk_f5s', ['https://muckbootcompany.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
