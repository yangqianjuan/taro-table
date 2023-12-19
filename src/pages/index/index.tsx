import { useState } from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";
import AtTable from "../../components/table";

export default function Index() {
  //需要传进来的表头数据示例
  const examplecolumns = [
    {
      title: "名称",
      dataIndex: "username",
      width: "20%",
      sort: "asc",
    },
    {
      title: "含量",
      dataIndex: "count",
      width: "20%",
      sort: "des",
    },
    {
      title: "标准",
      dataIndex: "gb",
      width: "20%",
    },
    {
      title: "达标度",
      dataIndex: "dbd",
      width: "20%",
    },
  ];
  const [cloumns, setCloumns] = useState(examplecolumns);

  const handleChangeCloums = (title, value) => {
    const neCloums = cloumns.map((item) => {
      console.log(title, value);
      if (item.dataIndex === title) {
        item.sort = value;
      }
      return item;
    });
    setCloumns(neCloums);
  };

  return (
    <View className="container">
      <view className="nav">其他布局</view>
      <AtTable columns={cloumns} changeCloums={handleChangeCloums} />
    </View>
  );
}
