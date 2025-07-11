import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_greenocktelegraph.co.uk_yoz', ['https://www.greenocktelegraph.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
