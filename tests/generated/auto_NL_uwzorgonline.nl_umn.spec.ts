import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_uwzorgonline.nl_umn', ['https://uwzorgonline.nl/consumenten/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
