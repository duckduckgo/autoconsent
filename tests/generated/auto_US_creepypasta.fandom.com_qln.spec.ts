import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_creepypasta.fandom.com_qln', ['https://creepypasta.fandom.com/wiki/Creepypasta_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
