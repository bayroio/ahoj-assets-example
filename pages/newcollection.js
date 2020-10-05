//pages/newcollection.js

import Layout from '../components/MyLayout';
import Router from 'next/router';

export default function NewCollection() {
    return (
        <Layout>
            <h1>Define a New Collection of Asset</h1> 
            <br /><hr /><br />
            <form onSubmit={e => {
                e.preventDefault();
                Router.push("/assetledger");
            }}>
                <h1>Collection</h1>
                Name: <input type="text"/>
                <br /><br />
                Symbol: <input type="text"/>
                <br /><br />
                <button type='submit'> Save Collection </button>
        </form>
        </Layout>
    );
}