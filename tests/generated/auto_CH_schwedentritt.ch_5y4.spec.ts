import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schwedentritt.ch_5y4', ['https://www.schwedentritt.ch/langlauf-einsiedeln-loipenzustand-news'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
