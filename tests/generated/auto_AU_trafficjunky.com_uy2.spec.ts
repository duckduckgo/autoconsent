import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_trafficjunky.com_uy2',
    ['https://www.trafficjunky.com/blog/2023/10/06/in-stream-video-101-introduction-and-how-to-guide/'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
