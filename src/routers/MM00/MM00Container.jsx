import React, { useState } from "react";
import MM00Presenter from "./MM00Presenter";
import { GET_ALL_VIDEOS } from "./MM00Queries";
import { useQuery } from "react-apollo-hooks";
import storageRef from "../../firebase";

const MM00Container = () => {
  //////////////////  VARIABLE      //////////////
  //////////////////  USE STATE     //////////////
  const [imagePath, setImagePath] = useState(``);
  //////////////////  USE REF       //////////////
  //////////////////  USE CONTEXT   //////////////
  //////////////////  USE QUERY     //////////////
  const {
    data: videoDatum,
    loading: videoLoading,
    refetch: videoRefetch,
  } = useQuery(GET_ALL_VIDEOS);

  console.log(videoDatum && videoDatum.getAllVideos);

  //////////////////  USE MUTATION  //////////////

  //////////////////  USE EFECT     //////////////

  const fileChangeHandler = async (e) => {
    const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;

    console.log(originFile);
    console.log(originFileName);

    console.log(e.target.files[0]);
    const D = new Date();
    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";
    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;

    try {
      const storage = storageRef.child(
        `SOPY/uploads/thumbnail/${uploadFileName}`
      );

      await storage.put(originFile);
      const url = await storage.getDownloadURL();

      setImagePath(url);
    } catch (e) {}
  };

  return (
    <MM00Presenter
      videoDatum={videoDatum && videoDatum.getAllVideos}
      fileChangeHandler={fileChangeHandler}
      imagePath={imagePath}
    />
  );
};

export default MM00Container;
