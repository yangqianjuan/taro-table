// 自己简单封装的表格组件，taro 和微信都没有table组件
import { Component, useEffect, useState } from "react";
import { View, Text, ScrollView, StickyHeader, Icon } from "@tarojs/components";
import "./index.scss";

//原理 循环生成表头，循环数据根据表头填入每一列

export default function AtTable(props) {
  return (   
<View className="table">
      <View className="tr bg-header">
        {props.columns.map((item, index) => {
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
                  props.changeColumns(item.dataIndex, value);
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
    {props.dataSource.map((item, index) => {
        return (
          <View className="tr bg-line" key={item.title}>
            {props.columns.map((item2, index2) => {
              if (item2.render) {
                return (
                  <View
                    className="td"
                    style={{ width: item2.width }}
                    key={item.dataIndex}
                  >
                    {
                      item2.render(item[item2.dataIndex]) //判断表头是不是有render 有就执行render
                    }
                  </View>
                );
              } else {
                return (
                  <View
                    className="td"
                    style={{ width: item2.width }}
                    key={item.dataIndex}
                  >
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
     
    </View>
    
  );
}
