import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-info-banner', [
    'https://www.tuhh.de/',
    'https://www.story.one/',
    'https://www.its-implant.com/',
    'https://www.iwgroup.at/',
]);
