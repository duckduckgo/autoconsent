#!/usr/bin/env node
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline'

const rulesDir = path.dirname(fileURLToPath(import.meta.url))
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

(async () => {
  const name = await prompt('New rule name: ')
  const filename = `autoconsent/${name}.json`
  const rule = {
    name,
    cosmetic: false,
    runContext: {
      main: true,
      frame: false,
    },
    intermediate: false,
    detectCmp: [{ exists: '#TODO'}],
    detectPopup: [{ visible: '#TODO'}],
    optIn: [{ click: '#Accept'}],
    optOut: [{ click: '#Reject'}],
    prehideSelectors: [],
    test: []
  }
  const ruleString = JSON.stringify(rule, undefined, 2)
  console.log('Writing rule to', filename)
  console.log(ruleString)
  await fs.promises.writeFile(path.join(rulesDir, filename), ruleString)
  rl.close()
})()

