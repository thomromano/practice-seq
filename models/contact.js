module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
      contact_name: DataTypes.STRING,
      phome_number: DataTypes.STRING,
      email: DataTypes.STRING
    });
  
    Contact.associate = function(models) {
     
    };
  
    return Contact;
  };