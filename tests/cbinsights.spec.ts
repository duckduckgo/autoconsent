import generateCMPTests from '../playwright/runner';

const urls = ['https://www.cbinsights.com/company/jpress/alternatives-competitors', 'https://www.cbinsights.com/company/openai'];

generateCMPTests('cbinsights', urls);
