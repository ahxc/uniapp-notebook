import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
  ],
  // !注意 npm安装uni组件，cli不会去编译nodemodules下的组件
  transpileDependencies: ['@dcloudio/uni-ui']
});
