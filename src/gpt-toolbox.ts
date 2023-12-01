#!/usr/bin/env node

import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const respond = (str: string) => {
  // TODO: Implement OpenAI chat completions API.
  return "GPT: Huh. I don't know."
}

const promptUser = () => {
  rl.question('You: ', (answer) => {
    console.log(respond(answer))
    promptUser()
  })
}

promptUser()
