import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  api_Key: string = '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';
  constructor() {}
  responce(input: string) {
    return axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003',
        temperature: 0.15,
        top_p: 1,
        presence_penalty: 0,
        frequency_penalty: 0,
        best_of: 1,
        max_tokens: 1200,
        prompt: input,
      },
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer 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`,
        },
      }
    );
  }
}
