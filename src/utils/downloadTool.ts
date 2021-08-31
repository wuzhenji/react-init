// import { baseUrl } from '@/config'
const baseUrl = ''

// 下载方法
export const downloadTool = (url: string, name?: string) => {
    fetch(`${baseUrl}/${url}`).then(async res => await res.blob()).then((blob) => {
        // 创建隐藏的可下载链接
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = URL.createObjectURL(blob);
        // 保存下来的文件名
        a.download = name ? name : url.split('/').slice(-1)[0];
        document.body.appendChild(a);
        a.click();
        // 移除元素
        document.body.removeChild(a);
    })
}
