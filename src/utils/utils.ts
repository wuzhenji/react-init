/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

const HOST = (<any>window).bizApiUrl || '';

export const bizUrl = (url: string): string => `${HOST}${url}`;

// 判断数据类型
export const typeOf = (data: any) => {
    let res = Object.prototype.toString.call(data).split(' ')[1]
    res = res.substring(0, res.length - 1).toLowerCase()
    return res
}
