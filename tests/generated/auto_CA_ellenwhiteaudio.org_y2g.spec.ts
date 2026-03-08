import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ellenwhiteaudio.org_y2g', ['https://ellenwhiteaudio.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
