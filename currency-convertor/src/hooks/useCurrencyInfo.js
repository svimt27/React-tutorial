import { useEffect, useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks
const [data, setdata] = useState({});

function useCurrencyInfo(currency) {
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setdata(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
