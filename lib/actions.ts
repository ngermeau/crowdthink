"use server";

import { saveUrl } from "./data";

export async function processUrl(url: string) {
  saveUrl(url);
  // const response = await fetch(url);
  // const html = await response.text();
  // let summary = summarizeText(html);
  // console.log(summary);
}

// const client = new OpenAI({
//   apiKey: OPENAI_API_KEY,
// });

// export async function summarizeText(text: string): Promise<string> {
//   const response = await client.completions.create({
//     model: "gpt-3.5",
//     prompt: `Please summarize the following html content and give only a short summary:\n\n${text}`,
//     max_tokens: 150,
//     temperature: 0.7,
//   });
//   return response.data.choices[0].text.trim();
// }
