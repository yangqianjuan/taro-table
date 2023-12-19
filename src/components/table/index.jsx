// 自己简单封装的表格组件，taro 和微信都没有table组件
import { Component, useEffect, useState } from "react";
import { View, Text, ScrollView, StickyHeader, Icon } from "@tarojs/components";
import "./index.scss";

//原理 循环生成表头，循环数据根据表头填入每一列

export default function AtTable(props) {
  const onScrollToUpper = function () {};
  const [loading, setLoading] = useState(false);
  const [isEnd, setEnd] = useState(false);
  const [current, setCurrent] = useState(1);
  const [dataSource, setDataSource] = useState([]);
  const [columns, setColumns] = useState([]);
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
  useEffect(() => {
    setDataSource(exampledataSource);
    setLoading(false);
  }, []);
  useEffect(() => {
    setColumns(props.columns);
    setDataSource(exampledataSource);
    setLoading(false);
    setEnd(false);
    setCurrent(1);
  }, [props.columns]);
  useEffect(() => {
    if (current < 10) {
      setDataSource((data) => [...data, ...exampledataSource]);
      console.log(dataSource);
      setLoading(false);
    } else {
      console.log("没有数据啦");
      setEnd(true);
      setLoading(false);
    }
  }, [current]);
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
    height: "150px",
    // width: "100%",
  };
  const scrollTop = 0;
  const Threshold = 20;
  return (
    <ScrollView
      className="scrollview"
      scrollY
      scrollX
      scrollWithAnimation
      scrollTop={scrollTop}
      style={scrollStyle}
      lowerThreshold={Threshold}
      upperThreshold={Threshold}
      onScrollToLower={onScrollToLower}
      onScrollToUpper={onScrollToUpper}
      onScroll={onScroll}
    >
      <View className="table">
        <View className="tr bg-header">
          {columns.map((item, index) => {
            return (
              <View
                className="th"
                style={{ width: item.width }}
                key={item.dataIndex}
              >
                <view
                  className="mask"
                  onClick={() => {
                    const value = item.sort === "asc" ? "des" : "asc";
                    props.changeCloums(item.dataIndex, value);
                  }}
                >
                  {item.title}
                  {item.sort && (
                    <View
                      className={[
                        "arrow",
                        item.sort === "des" ? "des" : "asc",
                      ].join(" ")}
                      style={{
                        transform: `rotate(${
                          item.sort === "des" ? 135 : -45
                        }deg)`,
                      }}
                    ></View>
                  )}
                </view>
              </View>
            );
          })}
        </View>

        {dataSource.map((item, index) => {
          return (
            <View className="tr bg-line">
              {columns.map((item2, index2) => {
                if (item2.render) {
                  return (
                    <View className="td" style={{ width: item2.width }}>
                      {
                        item2.render(item[item2.dataIndex]) //判断表头是不是有render 有就执行render
                      }
                    </View>
                  );
                } else {
                  return (
                    <View className="td" style={{ width: item2.width }}>
                      {
                        item[item2.dataIndex] //根据表头填数据
                      }
                    </View>
                  );
                }
              })}
            </View>
          );
        })}

        {loading && <View className="loading">加载中....</View>}
        {isEnd && <View className="loading">欧吼，加载完了。。。。</View>}
      </View>
    </ScrollView>
  );
}
