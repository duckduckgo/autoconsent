import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_NL_ncrvgids.nl_yuv',
    [
        'https://www.ncrvgids.nl/?cduid=7808ba09-26be-43f4-a302-a14ed39f0ce1.1765209661781&consent=CQcHNIAQcHNIAFjAZBENCIFgAAAAAAAAABpYAAAAAAAA.JOQwCQAQALzk4gTiInExOKicZE44Jx8TkIAA.YAAAAAAAAAAA',
    ],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] },
);
