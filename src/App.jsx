// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './app.scss';

function App() {
  // const [count, setCount] = useState(0)
  const apiUrl =
    'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';
  useEffect(() => {
    // const fetchInfo = async () => {
    //   try {
    //     const data = await axios.get(apiUrl);
    //     data.data.map((info) => {
    //       console.log(info.featured_media);
    //     });
    //     // console.log(data.data, 'data here');
    //     // setData(response.data);
    //   } catch (error) {
    //     console.error('big error', error);
    //     // setError(error);
    //   } finally {
    //     // setIsLoading(false);
    //   }
    // };
    const fetchInfo = async () => {
      const data = await axios.get(apiUrl);
      const dataArr = data.data.map((info) => {
        const postDataObj = {title: info.title.rendered ,date: info.date, imgUrl:info.featured_media, authorName:info._embedded.author[0].name,}
        return info;
      });
      console.log('dataArr', dataArr);
    };

    fetchInfo();
  }, [apiUrl]); // Re-run effect when apiUrl changes
  return <></>;
}

export default App;
