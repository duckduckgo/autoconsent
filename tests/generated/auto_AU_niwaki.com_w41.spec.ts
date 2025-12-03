import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_niwaki.com_w41',
    ['https://www.niwaki.com/cedar-bark-tape/?source=aw&amp;awc=117415_1751929847_9263c63ecafa1f9842d029427e54c402'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
