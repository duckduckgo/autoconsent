import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_livejasmin.com_6dl', ['https://www.livejasmin.com/en/girls'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
