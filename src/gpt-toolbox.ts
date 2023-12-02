#!/usr/bin/env node

import OpenAI from 'openai'
import * as readline from 'readline'
import dotenv from 'dotenv'

dotenv.config()

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

if (!OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY not set')
  process.exit(1)
}

const openai = new OpenAI()

const messages = [
  {
    role: 'system',
    content:
      'You are a helpful chatbot. Your responses are rendered in a command line.',
  },
]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', async (input) => {
  // Update the existing messages array with the new user input
  messages.push({
    role: 'user',
    content: input,
  })

  const completion = await openai.chat.completions.create({
    // @ts-expect-error -- The OpenAI API types require a `names` property, which is actually optional.
    messages,
    model: 'gpt-3.5-turbo',
  })

  // Update the existing messages array with the new response
  messages.push({
    role: 'assistant',
    content: completion.choices[0].message.content ?? '',
  })

  console.log('GPT > ', completion.choices[0].message.content)
})
