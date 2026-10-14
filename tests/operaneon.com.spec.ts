import generateCMPTests from '../playwright/runner';

generateCMPTests('operaneon.com', ['https://www.operaneon.com/'], { simulateInteraction: true });
