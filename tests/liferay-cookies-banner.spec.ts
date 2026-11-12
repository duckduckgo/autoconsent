import generateCMPTests from '../playwright/runner';

generateCMPTests('liferay-cookies-banner', [
    'https://www.unina.it/',
    'https://www.bluedart.com/',
    'https://www.ceskaposta.cz/',
    'https://web.girona.cat/',
    'https://www.hnb.hr/',
]);
