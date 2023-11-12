import styled from 'styled-components';
import tw from 'twin.macro';

export const FooterStyled = styled.div`
  ${tw`relative w-full block items-center lg:px-[100px] px-[20px] h-[100px] border-t-2`}
  //.footer {
  //  width: 100%;
  //  height:  100px;
  //  position: relative;
  //  display: flex;  
  //  align-items: center;
  //  justify-content: space-between;
  //}
  .footer-wrapper {

  }
  .footer-rights {
    ${tw`hidden lg:block `}
    //position: absolute;
    //right: 0;
  }
  .footer-navigation-list {
    ${tw`flex justify-center`}
  }
  .footer-navigation-list__item {
    ${tw`m-2`}
  }
  // .footer-button {
  //   ${tw`text-black hover:bg-blue-300 hover:text-white mx-10`}
  // }
  // .footer-logo {
  //   ${tw`w-[60px] block left-0`}
  // }
`
