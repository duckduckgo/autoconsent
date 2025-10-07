import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cgpbooks.co.uk_fic', ['https://www.cgpbooks.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
