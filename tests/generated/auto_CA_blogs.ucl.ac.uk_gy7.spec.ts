import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_blogs.ucl.ac.uk_gy7', ['https://blogs.ucl.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
