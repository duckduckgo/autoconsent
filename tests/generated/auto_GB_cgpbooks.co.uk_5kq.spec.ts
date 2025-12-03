import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cgpbooks.co.uk_5kq', ['https://www.cgpbooks.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
