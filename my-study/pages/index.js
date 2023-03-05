import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import ItemList from '@/src/components/ItemList';
import { Divider, Header } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

  function getData() {
    Axios.get(API_URL)
    .then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div>
      <Head>
        <title>메인화면</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider></Divider>
      <ItemList list={list}></ItemList>
    </div>
  )
}
