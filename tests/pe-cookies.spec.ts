import generateCMPTests from '../playwright/runner';

const urls = ['https://candidat.francetravail.fr/', 'https://www.francetravail.fr/accueil/', 'https://pro.francetravail.fr/accueil/'];

generateCMPTests('pe-cookies', urls, { mobile: true });
generateCMPTests('pe-cookies', urls, { mobile: false });
