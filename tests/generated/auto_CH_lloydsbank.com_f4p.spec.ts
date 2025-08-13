import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lloydsbank.com_f4p', ['https://www.lloydsbank.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
