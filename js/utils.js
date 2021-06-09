/*
 * @Author: Bienaii
 * @Date: 2021-06-09
 * @Description: 获取 URL 参数
 * @Tips: s1 = Visit W3School!;escape(s1) --> Visit%20W3School%21;unescape(s2) --> Visit W3School!
*/
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var res = window.location.search.substr(1).match(reg);
  if (res != null) {
    // 对编码的字符串进行解码
    return unescape(res[2]);
  }
  return null;
}
