import { create } from 'zustand'
import axios from 'axios';
import debounce from '../helpers/debounce';

const showStore = create((set) => ({
    graphdata: [],

    fetchData: async (id)=>{
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=max`)
        const graphData = res.data.prices.map(price=>{
            const [timestamp, p] = price;
            const date = new Date(timestamp).toLocaleDateString("en-us");
            return {
                Date: date,
                Price: p,
              };
        })
        set({graphData})
    },

}));

    

export default showStore;