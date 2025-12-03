import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lloydsbank.com_fsh', ['https://www.lloydsbank.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
