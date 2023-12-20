import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import Taro, { useLoad, getSystemInfo } from "@tarojs/taro";
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
      {
        title: "达标度",
        dataIndex: "dbd",
        width: "20%",
      },
      {
        title: "达标度",
        dataIndex: "dbd",
        width: "20%",
      },
        {
          title: "达标度",
          dataIndex: "dbd",
          width: "20%",
        },
  ];
  const exampledataSource = [
    {
      username: "小红",
      count: "1",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "2",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "3",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "4",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "5",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "6",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "7",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "8",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "9",
      gb: "321",
      dbd: "30%",
    },
    {
      username: "小红",
      count: "10",
      gb: "321",
      dbd: "30%",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [isEnd, setEnd] = useState(false);
  const [current, setCurrent] = useState(1);
  const [dataSource, setDataSource] = useState([]);
  const [columns, setColumns] = useState([]);
  const initData = () => {
    setDataSource(exampledataSource);
    setColumns(examplecolumns);
    setLoading(false);
    setLoading(false);
    setEnd(false);
    setCurrent(1);
  };
  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    if (current < 10) {
      setDataSource((data) => [...data, ...exampledataSource]);
      setLoading(false);
    } else {
      console.log("没有数据啦");
      setEnd(true);
      setLoading(false);
    }
  }, [current]);
  const handleChangeColumns = (title, value) => {
    const newCloums = columns.map((item) => {
      console.log(title, value);
      if (item.dataIndex === title) {
        item.sort = value;
      }
      return item;
    });
    initData();
    setColumns(newCloums);
  };
  const onScrollToUpper = function () {};
  const onScrollToLower = () => {
    console.log("滚动到底啦-------");
    if (isEnd || loading) return;
    setLoading(true);
    setCurrent((cur) => cur + 1);
  };
  const onScroll = function (e) {
    console.log(e.detail);
  };
  const scrollStyle = {
    height: "100vh",
    // width: "100%",
  };
  const scrollTop = 0;
  const Threshold = 20;
  return (
    <ScrollView
      className="scrollview"
      scrollY
      scrollWithAnimation
      scrollTop={scrollTop}
      style={scrollStyle}
      lowerThreshold={Threshold}
      upperThreshold={Threshold}
      onScrollToLower={onScrollToLower}
      onScrollToUpper={onScrollToUpper}
      onScroll={onScroll}
    >
      <View className="container">
        <view className="nav">其他布局</view>
        <AtTable
          columns={columns}
          dataSource={dataSource}
          changeColumns={handleChangeColumns}
        />
        {loading && <View className="loading">加载中....</View>}
        {isEnd && <View className="loading">欧吼，加载完了。。。。</View>}
      </View>
    </ScrollView>
  );
}
