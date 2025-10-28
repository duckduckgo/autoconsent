import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_st-andrews.ac.uk_fra', ['https://www.st-andrews.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
