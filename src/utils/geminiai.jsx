
import { API_KEY } from './Constants';

import { GoogleGenAI } from "@google/genai";

const geminiai = new GoogleGenAI({ apiKey: API_KEY });
export default geminiai;