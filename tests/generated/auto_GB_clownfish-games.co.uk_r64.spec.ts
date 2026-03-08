import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_clownfish-games.co.uk_r64', ['https://clownfish-games.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
