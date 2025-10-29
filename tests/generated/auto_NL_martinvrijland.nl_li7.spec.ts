import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_martinvrijland.nl_li7', ['https://www.martinvrijland.nl/?weglite_detected=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
