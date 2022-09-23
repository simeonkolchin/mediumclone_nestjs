import { DataSource } from 'typeorm';
import ormSeedConfig from '@app/ormseedconfig'
export default new DataSource(ormSeedConfig);