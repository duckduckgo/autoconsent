import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_chicagobooth.edu_ikx',
    ['https://www.chicagobooth.edu/media-relations-and-communications/press-releases/economists-versus-everyone-else'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
