// 自己简单封装的表格组件，taro 和微信都没有table组件
import { Component } from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import "./index.scss";

//原理 循环生成表头，循环数据根据表头填入每一列
export default class AtTable extends Component {
    constructor(){
        super(...arguments)
    }
  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    console.log(e.detail)
  }
  render() {
    const scrollStyle = {
        height: "150px",
        // width: "320px",
      };
      const scrollTop = 0;
      const Threshold = 20;
    return (
        
      <View className="table">
        <View className='mask'>
        <View className="tr bg-header">
          {this.props.columns.map((item, index) => {
            return (
              <View className="th" style={{ width: item.width }}>
                {item.title}
              </View>
            );
          })}
        </View>
        </View>
       
     
        {/* <ScrollView
        className="scrollview"
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper.bind(this)}
        onScroll={this.onScroll}
      > */}
     {this.props.dataSource.map((item, index) => {
          return (
            <View className="tr bg-line">
              {this.props.columns.map((item2, index2) => {
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
      {/* </ScrollView> */}
        
      </View>
    );
  }
}
