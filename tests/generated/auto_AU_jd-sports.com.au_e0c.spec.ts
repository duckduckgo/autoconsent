import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jd-sports.com.au_e0c', ['https://www.jd-sports.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
