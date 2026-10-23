import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'sitevision-cookie-consent',
    [
        'https://www.ltu.se/',
        'https://www.umea.se/',
        'https://www.linkoping.se/',
        'https://www.boras.se/',
        'https://sundsvall.se/',
        // no "necessary only" button, opt-out goes through the settings view
        'https://www.su.se/',
        'https://www.huddinge.se/',
        'https://www.sh.se/',
    ],
    {
        testSelfTest: false,
    },
);
