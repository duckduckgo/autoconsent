import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_courtauld.ac.uk_ijf', ['https://courtauld.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
