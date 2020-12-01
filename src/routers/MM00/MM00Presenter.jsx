import React from "react";
import { Wrapper, ImageBox } from "../../components/commonComponents";
import styled from "styled-components";
import Fade from "react-reveal/";

const ViewText = styled.div`
  margin: 6px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => (props.isTitle ? props.theme.blackColor : ``)};
  color: ${(props) => (props.isTitle ? props.theme.whiteColor : ``)};
  color: ${(props) => (props.isTitle ? props.theme.greyColor : ``)};
`;

const BarWrapper = styled.div`
  width: 1350px;
  height: 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.subThemeColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 30px 0px;
`;

const WrapWrapper = styled(Wrapper)`
  width: 1350px;
  flex-wrap: wrap;
`;

const MM00Presenter = () => {
  return (
    <Wrapper>
      <Wrapper height={`400px`} padding={`25px`} dr={`row`}>
        <Fade left>
          <Wrapper>
            <ImageBox
              width={`400px`}
              height={`225px`}
              bgImg={`https://storage2.ilyo.co.kr/contents/article/images/2020/0421/1587437889913183.jpg`}
            ></ImageBox>
          </Wrapper>
        </Fade>
        <Fade right>
          <Wrapper al={`flex-end`} padding={`20px`}>
            <ViewText size={`20px`} weight={`700`} isTitle={true}>
              태섭찡의 찡찡이 되는법
            </ViewText>

            <ViewText size={`20px`} weight={`400`} isAuthor={true}>
              태섭이눈 찅찅의이
            </ViewText>

            <ViewText size={`20px`} weight={`500`} isAuthor={true}>
              찡찡이는 찡찡찡
            </ViewText>
          </Wrapper>
        </Fade>
      </Wrapper>

      <Wrapper>
        <Fade top>
          <BarWrapper />
        </Fade>
        <Fade bottom>
          <WrapWrapper dr={`row`} margin={`0px 0px 100px 0px`}>
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://storage2.ilyo.co.kr/contents/article/images/2020/0421/1587437889913183.jpg`}
            />
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://storage2.ilyo.co.kr/contents/article/images/2020/0421/1587437889913183.jpg`}
            />
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://storage2.ilyo.co.kr/contents/article/images/2020/0421/1587437889913183.jpg`}
            />
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://storage2.ilyo.co.kr/contents/article/images/2020/0421/1587437889913183.jpg`}
            />
          </WrapWrapper>
        </Fade>
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
