import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wiki.warthunder.com_sni', ['https://wiki.warthunder.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
