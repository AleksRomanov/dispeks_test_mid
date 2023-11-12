import tw from 'twin.macro';
import styled from 'styled-components';

export const HeaderStyles = styled.div`
  ${tw`flex items-center justify-center  text-black text-base bg-white h-[100px] px-[20px]`}
  .header-navigation {
    /**${tw`hidden lg:block`}**/
  }
  .header-navigation-list {
    display: flex;
    &__item {
      margin-right: 20px;
    }
  }
  .header-burger {
    ${tw`bg-amber-400 hover:bg-amber-700 hover:text-black`}
  }
 .draweraaa  {
   display: none;
    ${tw`hidden`}
  }
  //.header-drawer {
  //  display: none;  
  //}
`
