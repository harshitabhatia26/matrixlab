import Card from './card';
import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';


function Main() {
    const [allTokens, setAllTokens] = useState([])

    useEffect(() => {
        fetch("https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c")
            .then(res=> res.json())
            .then(data => setAllTokens(data.pairs))
  }, [])

  const tokendata = allTokens.map((item)=>
    <Card
      key = {item.pairAddress}
      tokenadd = {item.baseToken.address}
      item = {item}
    />

)

console.log(tokendata);

const { search } = window.location;
const query = new URLSearchParams(search).get('add');
const filterPosts = (tokendata, query) => {
    if (!query) {
        return tokendata;
    }

    return tokendata.filter((token) => {
        const tokenPair = token.key.toLowerCase();
        const tokenAdd = token.props.tokenadd.toLowerCase();
        return tokenPair.includes(query)||tokenAdd.includes(query);
    });
};
const filteredPosts = filterPosts(tokendata, query);


    return (
        <div class="main">
      <form action="/" method="get" class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="add" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="heading mt-1 pl-1">Token Search Results</div>
      <div class="tokens">{filteredPosts}</div>
        </div>
    )
}

export default Main;