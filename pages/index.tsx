import React from 'react';
import axios from 'axios';

// interface IProps {
//   videos: Video[];
// }

const Home = () => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      hello
    </div>
  );
};

export default Home;

// export const getServerSideProps = async ({
//   query: { topic },
// }: {
//   query: { topic: string };
// }) => {
//   let response = await axios.get(`${BASE_URL}/api/post`);

//   if(topic) {
//     response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
//   }
  
//   return {
//     props: { videos: response.data },
//   };
// };
