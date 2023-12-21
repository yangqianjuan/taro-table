export default defineAppConfig({
  pages: ["pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle:'custom'
  },

  permission: {
    "scope.userLocation": {
      desc: "您的位置信息将用于提供定位服务",
    },
  },
  requiredPrivateInfos: ["getLocation"],
  requiredBackgroundModes: ["location"],
});
