import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_biblestudytoolbox.com_f3n', ['https://biblestudytoolbox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
