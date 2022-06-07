import { Handler } from "@netlify/functions";
import axios from "axios";

export const handler: Handler = async (event, context) => {
  const location = event.queryStringParameters.location;
  const secret = process.env.weather_API_secret;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${secret}`;
  try {
    const data = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data.data)
    }
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.response.data.message
    }
  }
}
