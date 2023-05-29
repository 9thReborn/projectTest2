import React from 'react'
import styled from 'styled-components';

const DoctorList: React.FunctionComponent = () => {
  return (
    <DoctorContainer>DoctorList</DoctorContainer>
  )
}

export default DoctorList;

const DoctorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 100vh;
    background-color: #E0E0E0;
`