import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_vaadin.com_bm4',
    [
        'https://vaadin.com/the-web-framework-for-java-developers?_stellarSplitUrl=true&_stellarVisitorStatus=false&_stellarExperimentId=2654',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
