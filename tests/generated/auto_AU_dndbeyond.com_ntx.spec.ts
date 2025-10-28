import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dndbeyond.com_ntx', ['https://www.dndbeyond.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
