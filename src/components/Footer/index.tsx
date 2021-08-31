import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const defaultMessage = '知途云大学';

  return (
    <DefaultFooter
      copyright={`2020 ${defaultMessage}`}
      links={[]}
    />
  );
};
