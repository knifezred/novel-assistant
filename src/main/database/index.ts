import logger from 'electron-log'
import { AppDataSource } from './data-source'
import { initStorageApi } from './repository/storage'
import { initUserApi } from './repository/user'
// 绑定api接口
export function setupServerApi(server) {
  // 连接 Sqlite 数据库
  AppDataSource.initialize()
    .then(() => {
      initUserApi(server)
      initStorageApi(server)
    })
    .catch((err) => {
      logger.error(err)
    })
}
