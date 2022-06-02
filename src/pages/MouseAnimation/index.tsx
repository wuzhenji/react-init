import React, { useEffect, useRef } from 'react';
import styles from './index.less';
import { getDirection } from '@/utils/domMouseInOutDirection';

const Item: React.FC<{ url: string }> = ({ url }) => {
  const ItemRef = useRef<any>(null);
  const HoverRef = useRef<any>(null);

  useEffect(() => {
    ItemRef.current?.addEventListener('mouseenter', onMouseEnter);
    ItemRef.current?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      ItemRef.current?.removeEventListener('mouseenter', onMouseEnter);
      ItemRef.current?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const onMouseEnter = (e: any) => {
    const { offsetX, offsetY } = e;
    const boundingClientRect = ItemRef.current.getBoundingClientRect();
    const direction = getDirection(offsetX, offsetY, boundingClientRect);
    if (direction > 0) {
      HoverRef.current.className = `${styles.HoverInfo} EnterAnimation${direction}`;
    }
  };

  const onMouseLeave = (e: any) => {
    const { offsetX, offsetY } = e;
    const boundingClientRect = ItemRef.current.getBoundingClientRect();
    const direction = getDirection(offsetX, offsetY, boundingClientRect);
    if (direction > 0) {
      HoverRef.current.className = `${styles.HoverInfo} LeaveAnimation${direction}`;
    }
  };

  return (
    <div ref={ItemRef} className={styles.Item}>
      <img src={url} alt="" />
      <div ref={HoverRef} className={styles.HoverInfo}></div>
    </div>
  );
};

const Page: React.FC = () => {
  const itemImgs = [
    'https://pic1.zhimg.com/80/v2-534496fbc22c960f9e0d7349c81ae052_720w.jpg?source=1940ef5c',
    'https://pic3.zhimg.com/v2-89735fee10045d51693f1f74369aaa46_r.jpg',
    'https://pic1.zhimg.com/v2-ca51a8ce18f507b2502c4d495a217fa0_r.jpg',
    'https://pic1.zhimg.com/v2-c90799771ed8469608f326698113e34c_r.jpg',
    'https://pic1.zhimg.com/v2-8d3dd83f3a419964687a028de653f8d8_r.jpg',
    'https://pic1.zhimg.com/80/v2-534496fbc22c960f9e0d7349c81ae052_720w.jpg?source=1940ef5c',
    'https://pic3.zhimg.com/v2-89735fee10045d51693f1f74369aaa46_r.jpg',
    'https://pic1.zhimg.com/v2-ca51a8ce18f507b2502c4d495a217fa0_r.jpg',
    'https://pic1.zhimg.com/v2-c90799771ed8469608f326698113e34c_r.jpg',
    'https://pic1.zhimg.com/v2-8d3dd83f3a419964687a028de653f8d8_r.jpg',
    'https://pic1.zhimg.com/80/v2-534496fbc22c960f9e0d7349c81ae052_720w.jpg?source=1940ef5c',
    'https://pic3.zhimg.com/v2-89735fee10045d51693f1f74369aaa46_r.jpg',
    'https://pic1.zhimg.com/v2-ca51a8ce18f507b2502c4d495a217fa0_r.jpg',
    'https://pic1.zhimg.com/v2-c90799771ed8469608f326698113e34c_r.jpg',
    'https://pic1.zhimg.com/v2-8d3dd83f3a419964687a028de653f8d8_r.jpg',
  ];

  return (
    <div className={styles.Page}>
      {itemImgs.map((v) => (
        <Item url={v} />
      ))}
    </div>
  );
};

export default Page;
