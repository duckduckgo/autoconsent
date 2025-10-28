import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sheffieldtheatres.co.uk_py8', ['https://www.sheffieldtheatres.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
