import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_plumbnation.co.uk_hef', ['https://www.plumbnation.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
