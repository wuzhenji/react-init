import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'POST /api/user/currentUser': (req: Request, res: Response) => {
    res.send({
      code: 200,
      data: {
        name: 'Admin',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
      },
      info: ''
    });
  },
};
