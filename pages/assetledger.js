// pages/assetledger.js

import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'unfetch';
import useSWR from 'swr';
//import fetch from 'isomorphic-unfetch'

//const API_URL = 'https://api.github.com'
//const API_URL = 'http://localhost:85'
//function fetcher(path) {
//  return fetch(API_URL + path).then(r => r.json());
//}

export default function AssetLedger({ledgers}) {
  //const { data, error } = useSWR('/api/ledgers', fetcher);
  //const { data, error } = useSWR('/repos/zeit/next.js', fetcher);
  //const { data, error } = useSWR('/api/next', fetcher);
 
  //if (error) return <div>failed to load</div>
  //if (!data) return <div>loading...</div>

  //return <div>Data: {data.stargazers_count}</div>
  return <div>Data: {ledgers}</div>

  /*console.log(`Show data fetched: ${data}`);
  console.log(data);
  console.log(data.map(ledgar => {ledger.symbol}));


  return (
    <Layout>
      <h1>Collection of Asset</h1> 
      <p>Think of a Collection of Asset as a box of toys and each asset as a toy.</p>
      <br /><hr /><br />
      <Link href="/newcollection">
        <a>Create a New Collection...</a>
      </Link>
      <br /><hr /><br />
      
    </Layout>
  )*/
}

AssetLedger.getInitialProps = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var myInit = { method: 'GET',
  headers: myHeaders,
               //body: JSON.stringify(data),
               //mode: 'cors',
               cache: 'default' };
  
  //const res = await fetch('http://localhost:85/api/ledgers', myInit)
  //const json = await res.json()
  //return { ledgers: json }
  const res = await fetch('http://localhost:85/api/ledgers')
  console.log('res: '+res)
  const jsonData = await res.json()
  console.log('jsonData: '+jsonData)
  

  // Pass data to the page via props
  return { props: { ledgers: jsonData } }
}


/*
<ul>
        {data.map(ledger => (
          <li key={ledger.symbol}>
          <Link href="/p/[id]" as={`/p/${ledger.symbol}`}>
            <a>{ledger.name}</a>
            <a>{ledger.symbol}</a>
            <a>{ledger.address}</a>
          </Link>
        </li>
        ))} 
      </ul>
*/

/*const AssetLedger = props => (
  <Layout>
    <h1>Collection of Asset</h1> 
    <p>Think of a Collection of Asset as a box of toys and each asset as a toy.</p>
    <br /><hr /><br />
    <Link href="/newcollection">
      <a>Create a New Collection...</a>
    </Link>
    <br /><hr /><br />
    <ul>
      {props.ledgers.map(ledger => (
        <li key={ledger.symbol}>
        <Link href="/p/[id]" as={`/p/${ledger.symbol}`}>
          <a>{ledger.name}</a>
          <a>{ledger.symbol}</a>
          <a>{ledger.address}</a>
        </Link>
      </li>
      ))} 
    </ul>
  </Layout>
);

AssetLedger.getInitialProps = async function() {
  const { data, error } = useSWR('/api/ledgers', fetch);
  //const res = await fetch('./pages/api/ledgers.json');
  //const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    ledgers: data.map(ledger => ledger)
  };
};*/

//export default AssetLedger;