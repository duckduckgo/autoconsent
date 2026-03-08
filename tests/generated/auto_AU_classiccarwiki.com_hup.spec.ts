import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_classiccarwiki.com_hup', ['https://classiccarwiki.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
