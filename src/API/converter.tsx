import { ApiResponse, CoinData } from './types';

const options = {
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': 'coinrankinga17e02ac589db7ef78294db7658a6933c00b58a6a522e95c',
  },
};

const Converter = async (uuid: string): Promise<CoinData> => {
  const response = await fetch(`https://api.coinranking.com/v2/coin/${uuid}`, options);
  const result: ApiResponse = await response.json();
  
  const { coin } = result.data;
  return coin;
};

export default Converter;