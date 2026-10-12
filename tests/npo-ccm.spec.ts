import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'npo-ccm',
    [
        'https://www.powned.tv/',
        'https://www.bnnvara.nl/',
        'https://www.vpro.nl/',
        'https://www.kro-ncrv.nl/',
        'https://www.wnl.tv/',
        'https://npo.nl/',
        'https://www.ntr.nl/',
    ],
    {
        testSelfTest: false,
    },
);
