import styled from "styled-components";
export const HelloWorldStyle = styled.div`
  .parent {
    display: flex;
    flex-direction: row;
    background-color: green;
    //align-items: flex-start;
    //justify-content: flex-end;
    //align-items: center;
    //justify-content: space-evenly;
    //justify-content: space-between;
    //justify-content: space-around;
    align-items: center;
    justify-content : center;
    gap: 20px;
    height: 100vh;
  }
  .square__child {
    width: 50px;
    height: 50px;
    background-color: yellow;
  }
  .square__rectangle {
    width: 500px;
    height: 100px;
    border: 2px solid box;
    border-radius: 50px;
    
    background-color: red;

    @media (max-width: 900px) {
      // background-color: yellow;
      display: none;
    }
  }
`;