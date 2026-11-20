import generateCMPTests from '../playwright/runner';

generateCMPTests('legalblink', [
    'https://www.giornalelavoce.it/',
    'https://www.polesine24.it/',
    'https://www.coseinutili.it/',
    'https://www.agora-web.it/',
    'https://www.otticait.com/',
    'https://www.iugs.org/',
]);
