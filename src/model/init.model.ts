import {Account} from './account'
import {Job} from './jobInfo'
export const associate = () => {
   Job.belongsTo(Account, {foreignKey : 'userId'})
}
associate()