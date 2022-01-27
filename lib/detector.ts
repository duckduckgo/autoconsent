import { AutoCMP, TabActor } from './types';

export default async function detectDialog(tab: TabActor, retries: number, rules: AutoCMP[]): Promise<AutoCMP> {
  let breakEarly = false;
  const found: number = await new Promise(async (resolve) => {
    let earlyReturn = false;
    await Promise.all(rules.map(async (r, index) => {
      try {
        if (await r.detectCmp(tab)) {
          earlyReturn = true;
          resolve(index)
        }
      } catch (e) {
        breakEarly = true;
      }
    }));
    if (!earlyReturn) {
      resolve(-1)
    }
  })
  if (found === -1 && retries > 0 && !breakEarly) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const result = detectDialog(tab, retries - 1, rules);
        resolve(result);
      }, 500);
    });
  }
  return found > -1 ? rules[found] : null;
}