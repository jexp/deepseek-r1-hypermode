import { models } from "@hypermode/modus-sdk-as"

import {
  OpenAIChatModel,
  SystemMessage,
  UserMessage,
} from "@hypermode/modus-sdk-as/models/openai/chat"

export function generateText(prompt: string): string {
  const model = models.getModel<OpenAIChatModel>("deepseek-reasoner")

  // DeepSeek recommends not using a system prompt and including all instructions in the user prompt
  const input = model.createInput([new UserMessage(prompt)])

  // DeepSeek recommends setting temperature within the range of 0.5-0.7 with 0.6 the recommended default
  input.temperature = 0.6

  // Here we invoke the model with the input we created.
  const output = model.invoke(input)

  // The output is also specific to the OpenAIChatModel interface.
  // Here we return the trimmed content of the first choice.
  return output.choices[0].message.content.trim()
}
