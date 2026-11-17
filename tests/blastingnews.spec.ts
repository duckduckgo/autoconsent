import generateCMPTests from '../playwright/runner';

generateCMPTests('blastingnews', ['https://it.blastingnews.com/', 'https://www.blastingnews.com/', 'https://de.blastingnews.com/'], {});
