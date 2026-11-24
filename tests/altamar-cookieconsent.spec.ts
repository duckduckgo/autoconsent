import generateCMPTests from '../playwright/runner';

const urls = ['https://altamar.es/', 'https://altamar.cat/', 'https://inoxcyl.com/'];

generateCMPTests('altamar-cookieconsent', urls, { mobile: true });
generateCMPTests('altamar-cookieconsent', urls, { mobile: false });
