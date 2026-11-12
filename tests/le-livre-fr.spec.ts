import generateCMPTests from '../playwright/runner';

generateCMPTests('le-livre.fr', ['https://www.le-livre.fr/', 'https://www.le-livre.fr/en-savoir-plus.html']);
