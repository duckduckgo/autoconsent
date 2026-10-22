import generateCMPTests from '../playwright/runner';

generateCMPTests('privacylab-elmo', [
    'https://webmail.infocert.it/legalmail/',
    'https://www.univaq.it/',
    'https://www.uni.com/',
    'https://www.bestwestern.it/',
    'https://www.visura.it/',
]);
