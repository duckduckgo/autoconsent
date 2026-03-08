import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.crowdsec.net_7wh', ['https://docs.crowdsec.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
