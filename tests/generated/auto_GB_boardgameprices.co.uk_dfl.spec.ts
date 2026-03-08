import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boardgameprices.co.uk_dfl', ['https://boardgameprices.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
