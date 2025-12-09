// import styled from "styled-components";
// const FlexWrapStyle = styled.div`
//      display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   .parent {
//     //  width: px;
//     height: 200px;
//     border: 1px solid #c3c3c3;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: flex-end;
//   }
//   .child_1 {
//     max-width: 380px;
//     height: 200px;
//     background-color: yellow;
//   }
//   .child_2 {
//     width: 200px;
//     height: 200px;
//     background-color: green;
//   }
//   .child_3 {
//     width: 200px;
//     height: 200px;
//     background-color: red;
//   }
//   .child_4 {
//     width: 200px;
//     height: 200px;
//     background-color: violet;
//   }
//   .child_5 {
//     width: 200px;
//     height: 200px;
//     background-color: blue;
//   }
//   .child_6 {
//     width: 200px;
//     height: 200px;
//     background-color: aqua;
//   }
// `;

// export default FlexWrapStyle;

import styled from "styled-components";

const FlexWrapStyled = styled.div`
   .Main {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 20px;
   }

   .Box {
      background: lightblue;
      padding: 20px;
      width: 200px;
      height: 100px;
      border-radius: 10px;
   }
`;

export default FlexWrapStyled;
