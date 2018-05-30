module.exports = function(sequelize, DataTypes) {
    sequelize.define('Contact', {
        //object representing properties of the model *string or INTEGER 
         phonenumber: {
             type: DataTypes.INTEGER, 
             unique: true, 
             allowNull: false, 
             primaryKey: true
         },
         password:{ 
             type: DataTypes.STRING,
             unique: true
         },
         body:{
             type: DataTypes.TEXT
         }
      
    });
  
    Contact.associate = function(models) {
     
    };
  
    return Contact;
  };