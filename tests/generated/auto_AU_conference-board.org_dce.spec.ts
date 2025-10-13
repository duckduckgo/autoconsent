import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_conference-board.org_dce', ['https://www.conference-board.org/topics/total-economy-database'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
