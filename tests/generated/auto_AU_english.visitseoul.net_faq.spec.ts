import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_english.visitseoul.net_faq', ['https://english.visitseoul.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
