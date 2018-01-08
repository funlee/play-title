/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-01-09 00:51:19
 * @Last Modified time: 2018-01-09 00:51:19
 * @Description: play-title 
 */
export default (funny = '页面出bug了') => {
  const title = document.title
  let hidden
  let visibilityChange
  if (typeof document.hidden !== 'undefind') {
    hidden = 'hidden'
    visibilityChange = 'visibilitychange';
  } else if (typeof document.mozHidden !== 'undefind') {
    hidden = 'mozhidden'
    visibilityChange = 'mozvisibilitychange'
  } else if (typeof document.webkitHidden !== 'undefind') {
    hidden = 'webkithidden'
    visibilityChange = 'webkitvisibilitychange'
  } else if (typeof document.msHidden !== 'undefind') {
    hidden = 'mshidden'
    visibilityChange = 'msvisibilitychange'
  }
  document.addEventListener(visibilityChange, () => {
    document.title = document[hidden] ? funny : title
  }, false)
}
