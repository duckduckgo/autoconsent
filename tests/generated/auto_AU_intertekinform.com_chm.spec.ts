import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_intertekinform.com_chm', ['https://www.intertekinform.com/en-au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
