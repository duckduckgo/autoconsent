import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_auvergnerhonealpes-livre-lecture.org_obh', ['https://auvergnerhonealpes-livre-lecture.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
