import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_citations-inspirantes.com_2s4', ['https://citations-inspirantes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
