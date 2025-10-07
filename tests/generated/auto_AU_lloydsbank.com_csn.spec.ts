import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lloydsbank.com_csn', ['https://www.lloydsbank.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
