import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_liveable.co.uk_jmi', ['https://www.liveable.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
