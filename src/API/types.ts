export interface CoinData {
    uuid: string;
    symbol: string;
    name: string;
    price: string;
  }
  
  export interface ApiResponse {
    data: {
      coin: CoinData;
    };
  }