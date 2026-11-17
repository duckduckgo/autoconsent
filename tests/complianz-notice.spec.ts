import generateCMPTests from '../playwright/runner';

generateCMPTests('Complianz notice', [
    'https://groups.io/',
    'https://www.tuxedocomputers.com/',
    // banner with a blocking screen overlay
    'https://harleypsychologygroup.com/tests/depression-children/',
    'https://infobunny.com/',
    // separate desktop and mobile dismiss buttons, one of them hidden
    'https://jpn.pioneer/',
]);
