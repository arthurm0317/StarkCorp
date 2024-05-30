const precoDolar = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const data = await response.json();
    return data.USDBRL;
  };
  
  export default precoDolar;