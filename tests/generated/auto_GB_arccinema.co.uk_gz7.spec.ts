import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_arccinema.co.uk_gz7', ['https://arccinema.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
