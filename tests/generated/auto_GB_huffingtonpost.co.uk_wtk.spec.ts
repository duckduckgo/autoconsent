import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_huffingtonpost.co.uk_wtk', ['https://www.huffingtonpost.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
