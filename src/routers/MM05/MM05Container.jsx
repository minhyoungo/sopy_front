// ...
import React from "react";
import MM05Presenter from "./MM05Presenter";
import useInput from "../../Hooks/useInput";
import { RESIST_USER } from "./MM05Queries";
import { useMutation } from "react-apollo-hooks";

const MM05Container = (history) => {
  //////////////////  VARIABLE            //////////////
  //////////////////  USE STATE          //////////////
  const newEmail = useInput("");
  const newName = useInput("");
  const newNickName = useInput("");
  const newMobile = useInput("");
  const newZoneCode = useInput("");
  const newAddress = useInput("");
  const newDetailAddress = useInput("");

  //////////////////  USE REF           //////////////
  //////////////////  USE CONTEXT      //////////////
  //////////////////  USE QUERY       //////////////
  /////////////////  USE MUTATION    //////////////
  const [registUserMutation] = useMutation(RESIST_USER);
  //////////////////  USE EFECT     //////////////
  ///////////////////// HANDLER /////////////////////////
  const registUserHandler = async () => {
    if (!newName.value || newName.value.trim() === "") {
      alert("이름은 필수 입력사항입니다.");
      return;
    }

    if (!newAddress.value || newAddress.value.trim() === "") {
      alert("주소는 필수 입력사항입니다.");
      return;
    }
    if (!newMobile.value || newMobile.value.trim() === "") {
      alert("연락처는 필수 입력사항입니다.");
      return;
    }
    if (!newZoneCode.value || newZoneCode.value.trim() === "") {
      alert("주소는 필수 입력사항입니다.");
      return;
    }

    if (!newNickName.value || newNickName.value.trim() === "") {
      alert("별명은 필수 입력사항입니다.");
      return;
    }
    if (!newEmail.value || newEmail.value.trim() === "") {
      alert("이메일은 필수 입력사항입니다.");
      return;
    }
    console.log(newName);
    const { data } = await registUserMutation({
      variables: {
        name: newName.value,
        email: newEmail.value,
        nickName: newNickName.value,
        mobile: newMobile.value,
        zoneCode: newZoneCode.value,
        address: newAddress.value,
        detailAddress: newDetailAddress.value,
      },
    });
    console.log(data);
  };

  const searchPostHandler = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        newZoneCode.setValue(data.zonecode);
        newAddress.setValue(data.address);
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
      },
    }).open();

    
  };

  return (
    <MM05Presenter
      newName={newName}
      newEmail={newEmail}
      newNickName={newNickName}
      newMobile={newMobile}
      newZoneCode={newZoneCode}
      newAddress={newAddress}
      newDetailAddress={newDetailAddress}
      registUserHandler={registUserHandler}
      searchPostHandler={searchPostHandler}
    />
  );
};

export default MM05Container;
