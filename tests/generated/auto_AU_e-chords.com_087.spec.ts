import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_e-chords.com_087', ['https://www.e-chords.com/chords/the-beatles/im-only-sleeping'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
