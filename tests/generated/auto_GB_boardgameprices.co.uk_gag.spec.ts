import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boardgameprices.co.uk_gag', ['https://boardgameprices.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
