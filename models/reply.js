'use strict';
module.exports = (sequelize, DataTypes) => {
  const reply = sequelize.define('reply', {
    postId: DataTypes.INTEGER,
    writer: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  reply.associate = function(models) {
    // associations can be defined here
  };
  return reply;
};