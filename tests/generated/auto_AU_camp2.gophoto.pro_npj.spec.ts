import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_camp2.gophoto.pro_npj', ['https://camp2.gophoto.pro/BJ6EZV'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
