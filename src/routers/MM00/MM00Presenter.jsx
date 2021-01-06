import React from "react";
import { Wrapper, ImageBox } from "../../components/commonComponents";
import styled from "styled-components";
import Fade from "react-reveal/";

const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 1px solid #777;
  margin: 10px;
  object-fit: cover;
`;
const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  width: 120px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.checkColor};
  color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 5px;
  border-radius: ${(props) => props.theme.radius};
`;

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

const MM00Presenter = ({ videoDatum, fileChangeHandler, ImagePath }) => {
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
          <Wrapper al={`flex-start`} padding={`20px`}>
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
            {videoDatum ? (
              videoDatum.length === 0 ? (
                <Wrapper>미디어 목록 없음</Wrapper>
              ) : (
                videoDatum.map((data, idx) => {
                  return (
                    <Fade bottom delay={idx * 60} key={idx}>
                      <ImageBox
                        width={`320px`}
                        height={`180px`}
                        margin={`5px`}
                        bgImg={data.thumbnailPath}
                      />
                    </Fade>
                  );
                })
              )
            ) : (
              <Wrapper>조회중</Wrapper>
            )}
          </WrapWrapper>
        </Fade>
      </Wrapper>
      {/* FILE UPLOAD TEST */}
      <Image src={ImagePath}></Image>
      <FileInput type="file" id="file-js" onChange={fileChangeHandler} />
      <FileLabel htmlFor="file-js">파일선택</FileLabel>
    </Wrapper>
  );
};

export default MM00Presenter;
