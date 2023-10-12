import {Account} from './account'
import {Job} from './jobInfo'
export const associate = () => {
    Account.hasMany(Job, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    Job.hasOne(Account, {foreignKey: 'user_id'})
}
associate()