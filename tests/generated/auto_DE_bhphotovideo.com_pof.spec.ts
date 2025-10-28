import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bhphotovideo.com_pof', ['https://www.bhphotovideo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
