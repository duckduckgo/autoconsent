import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_autobedrijfhobo.nl_vyx', ['https://autobedrijfhobo.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
