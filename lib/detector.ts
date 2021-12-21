import { AutoCMP, TabActor } from './types';

export default async function detectDialog(tab: TabActor, retries: number, rules: AutoCMP[]): Promise<AutoCMP> {
  const found: number = await new Promise(async (resolve) => {
    let earlyReturn = false;
    await Promise.all(rules.map(async (r, index) => {
      try {
        if (await r.detectCmp(tab)) {
          earlyReturn = true;
          resolve(index)
        }
      } catch (e) {
        console.warn('detectCMP error', r.name, e)
      }
    }));
    if (!earlyReturn) {
      resolve(-1)
    }
  })
  if (found === -1 && retries > 0) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const result = detectDialog(tab, retries - 1, rules);
        resolve(result);
      }, 500);
    });
  }
  return found > -1 ? rules[found] : null;
}