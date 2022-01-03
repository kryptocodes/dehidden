import { NextPage } from 'next';
import React from 'react'
import Landing from '../components/landing';
import Wrapper from '../components/shared/Wrapper';



const index: NextPage = ({}) => {
    return (
      <>
       <Wrapper title='Assignment'>
        <Landing/>
        </Wrapper>
      </>
    );
}

export default index