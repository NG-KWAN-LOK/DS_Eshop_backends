'use strict';

module.exports = app => {
  const { Sequelize } = app;
  const sequelize = app.model;

  const Users = sequelize.define('users', {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      allowNull: false,
      unique: true,
      defaultValue: Sequelize.UUIDV4,
    },
    username: {
      type: Sequelize.STRING(255),
      allowNull: true,
      unique: true
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: false
    },
    pwHash: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    is_online: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    avatar: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    status: {
      type: Sequelize.INTEGER.UNSIGNED,
      defaultValue: 0,
      allowNull: false,
    },
    telephone: {
      type: Sequelize.STRING(32),
      allowNull: true,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    invite_code: {
      type: Sequelize.STRING(32),
      allowNull: true,
    },
    creator_id: {
      type: Sequelize.UUID,
      allowNull: true,
    },
    company_id: {
      type: Sequelize.UUID,
      allowNull: true,
    },
    group_id: {
      type: Sequelize.UUID,
      allowNull: true,
    },
    last_login: {
      type: Sequelize.DATE,
      defaultValue: null
    },
    last_login_ip: {
      type: Sequelize.STRING(32),
      allowNull: true,
    },
    
  }, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    underscored: true,
    charset: 'utf8mb4'
  });

  Users.sync({ force: false });

  // Association
  Users.associate = () => {

    Users.hasOne(Users, {
      foreignKey: 'creator_id'
    });

  };

  return Users;
};