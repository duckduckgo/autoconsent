import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lehmannaudio.com_b7i', ['https://www.lehmannaudio.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
