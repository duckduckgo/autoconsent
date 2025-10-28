import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_visitscotland.com_nyj', ['https://www.visitscotland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
