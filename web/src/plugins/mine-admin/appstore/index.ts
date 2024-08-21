/**
 * MineAdmin is committed to providing solutions for quickly building web applications
 * Please view the LICENSE file that was distributed with this source code,
 * For the full copyright and license information.
 * Thank you very much for using MineAdmin.
 *
 * @Author X.Mo<root@imoi.cn>
 * @Link   https://github.com/mineadmin
 */
import type { Plugin } from '#/global'

const pluginConfig: Plugin.PluginConfig = {
  install() {
    console.log('MineAdmin应用市场已启动')
  },
  config: {
    enable: !import.meta.env.PROD,
    info: {
      name: 'mine-admin/appstore',
      version: '1.0.0',
      author: 'X.Mo',
      description: '提供应用市场功能',
    },
  },
  views: [
    {
      name: 'MineAppStoreRoute',
      path: '/appstore',
      meta: {
        title: '应用市场',
        i18n: 'menu.appstore',
        icon: 'vscode-icons:file-type-azure',
        type: 'M',
        hidden: true,
        breadcrumbEnable: true,
        copyright: true,
        cache: true,
      },
      component: () => import('./views/index.vue'),
    },
  ],
}

export default pluginConfig
