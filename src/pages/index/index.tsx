import { View, Text, ScrollView } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";
import AtTable from "../../components/table";

export default function Index() {
  //   useLoad(() => {
  //     console.log("Page loaded.");
  //     Taro.getLocation({
  //       type: "gcj02",
  //       success: (res) => {
  //         console.log(res);
  //       },
  //       fail: (err) => {
  //         // 处理获取位置信息失败的情况
  //         console.error("获取位置信息失败：", err);
  //       },
  //     });
  //   });

  //需要传进来的数据示例
  const exampledataSource = [
    {
      username: "小红",
      count: "123",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "123",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "123",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "123",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "123",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "123",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "123",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "123",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "123",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "123",
      gb: "321",
      dbd: "30%",
    },
  ];
  //需要传进来的表头数据示例
  const examplecolumns = [
    {
      title: "名称",
      dataIndex: "username",
      width:'30%'
    },
    {
      title: "含量",
      dataIndex: "count",
      width:'30%'
    },
    {
      title: "标准",
      dataIndex: "gb",
      width:'30%'
    },
    {
      title: "达标度",
      dataIndex: "dbd",
      width:'30%'
    },
  ];
  const scrollStyle = {
    height: "150px",
    // width: "320px",
  };
  const scrollTop = 0;
  const Threshold = 20;
  const vStyleA = {
    height: "150px",
    backgroundColor: "rgb(26, 173, 25)",
    width: "2000px",
    display: "inline-block",
  };
  const vStyleB = {
    height: "150px",
    backgroundColor: "rgb(39,130,215)",
    width: "2000px",
    display: "inline-block",
  };
  const vStyleC = {
    height: "150px",
    backgroundColor: "rgb(241,241,241)",
    color: "#333",
    width: "2000px",
    display: "inline-block",
  };

 

  return (
    <View className="container">
      {/* <Text>Hello worldxxxxx</Text> */}
      {/* <ScrollView
        className="scrollview"
        scrollY
        scrollX
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={onScrollToUpper}
        onScroll={onScroll}
      >
        <AtTable dataSource={exampledataSource} columns={examplecolumns} />
      </ScrollView> */}
         <AtTable dataSource={exampledataSource} columns={examplecolumns} />
    </View>
  );
}
