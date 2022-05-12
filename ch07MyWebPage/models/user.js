'use strict';
const { Model , Sequelize} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    // id : {}는 자동으로 AT PK 생성해줌 자동으로 기본키 생성
    name: {
      type: DataTypes.STRING(20),
      allowNull: false, // notnull
      unique: true, // 
    },
    age: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    married: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('now()'),
    },
  }, {
    sequelize,
    timestamps: false, // true가 되면, createdAt, updatedAt 필드
    underscored: false, // ture - CamelCase , false - SnakeCase
    // created_At
    modelName: 'User',
    // 모델명
    tableName: 'users',
    // 테이블명 관례상 자동으로 생김.
    paranoid: false, // true라면 deleteAt필드 생성.null이면 정상
    // deletedAt필드에 날짜가 있으면 해당 날짜의 삭제된것으로  취급
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  return user;
};

