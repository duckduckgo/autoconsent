import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pichunter.com_zhf', ['https://www.pichunter.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
