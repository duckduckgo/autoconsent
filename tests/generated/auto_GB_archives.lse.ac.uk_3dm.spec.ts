import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_archives.lse.ac.uk_3dm', ['https://archives.lse.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
