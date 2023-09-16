"use strict";
const Sequelize = require("sequelize");

// Import sequelize object,
// Database connection pool managed by Sequelize.
const sequelize = require("../database/postgreSQL.js");

// Define method takes two arguments
// 1st - name of table
// 2nd - columns inside the table
const SQLQuery = sequelize.define("DeathCertificate", {
    // Column-1, user_id is an object with
    // properties like type, keys,
    // validation of column.
    id: {
        // Sequelize module has INTEGER Data_Type.
        type: Sequelize.INTEGER,

        // To increment user_id automatically.
        autoIncrement: true,

        // user_id can not be null.
        allowNull: false,

        // For uniquely identify user.
        primaryKey: true,
    },
    Key: { type: Sequelize.STRING, allowNull: false },
    I_DEATH_REGISTRATION_ID: { type: Sequelize.STRING, allowNull: false },
    TS_DECEASED_DATE_OF_DEATH: { type: Sequelize.STRING, allowNull: true },
    I_ULBOBJID: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_SURNAME: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_NAME: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_UID_OR_AADHAR_NUMBER: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    VC_PARENT_TYPE: { type: Sequelize.STRING, allowNull: true },
    VC_PARENT_SURNAME: { type: Sequelize.STRING, allowNull: true },
    VC_PARENT_NAME: { type: Sequelize.STRING, allowNull: true },
    VC_PARENT_AADHAR: { type: Sequelize.STRING, allowNull: true },
    VC_MOTHER_SURNAME: { type: Sequelize.STRING, allowNull: true },
    VC_MOTHER_NAME: { type: Sequelize.STRING, allowNull: true },
    VC_GENDER: { type: Sequelize.STRING, allowNull: true },
    VC_AGE_OF_TERM: { type: Sequelize.STRING, allowNull: true },
    I_AGE: { type: Sequelize.STRING, allowNull: true },
    VC_PLACE_OF_DEATH: { type: Sequelize.STRING, allowNull: true },
    VC_HOSPITAL_NAME: { type: Sequelize.STRING, allowNull: true },
    VC_ADDRESS_LINE1: { type: Sequelize.STRING, allowNull: true },
    VC_ADDRESS_LINE2: { type: Sequelize.STRING, allowNull: true },
    VC_ADDRESS_LINE3: { type: Sequelize.STRING, allowNull: true },
    VC_LOCALITY: { type: Sequelize.STRING, allowNull: true },
    I_PINCODE: { type: Sequelize.STRING, allowNull: true },
    VC_DEATH_PLACE: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_PERMANENT_ADDRESS: { type: Sequelize.STRING, allowNull: true },
    VC_INFORMANT_SURNAME: { type: Sequelize.STRING, allowNull: true },
    VC_INFORMANT_NAME: { type: Sequelize.STRING, allowNull: true },
    VC_INFORMANT_ADDRESS: { type: Sequelize.STRING, allowNull: true },
    TS_INFORMANT_DATE: { type: Sequelize.STRING, allowNull: true },
    VC_INFORMANT_SIGN: { type: Sequelize.STRING, allowNull: true },
    VC_INFORMANT_REMARKS: { type: Sequelize.STRING, allowNull: true },
    VC_INFORMANT_MOBILE_NUMBER: { type: Sequelize.STRING, allowNull: true },
    VC_INFORMANT_EMAILID: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_TOWN_OR_VILLAGE: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_ID_TOWN_OR_VILLAGE: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_STATE_ID: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_DISTRICT_ID: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_MANDAL_ID: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_RELIGION_ID: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_OCCUPATION: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_MEDICAL_ATTENTION: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_IS_MEDICAL_CERTIFIED: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    VC_DECEASED_CAUSE_OF_DEATH: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_IS_PREGNANCY_DEATH: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_SMOKING_FROM: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_TOBACCO_FROM: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_ALCOHOL_FROM: { type: Sequelize.STRING, allowNull: true },
    VC_DECEASED_PAN_FROM: { type: Sequelize.STRING, allowNull: true },
    VC_ENCLOUSER: { type: Sequelize.STRING, allowNull: true },
    VC_IMAGE_URL: { type: Sequelize.STRING, allowNull: true },
    C_DELFLAG: { type: Sequelize.STRING, allowNull: true },
    VC_REMARKS: { type: Sequelize.STRING, allowNull: true },
    I_CERATED_BY_ID: { type: Sequelize.STRING, allowNull: true },
    TS_CREATED_TIME: { type: Sequelize.STRING, allowNull: true },
    I_MODIFIED_BY_ID: { type: Sequelize.STRING, allowNull: true },
    TS_MODIFIED_TIME: { type: Sequelize.STRING, allowNull: true },
    VC_CREATED_IP: { type: Sequelize.STRING, allowNull: true },
    VC_MODIFIED_IP: { type: Sequelize.STRING, allowNull: true },
    I_APP_RECEIVED_ID: { type: Sequelize.STRING, allowNull: true },
    VC_STATUS: { type: Sequelize.STRING, allowNull: true },
    VC_MC_REMARKS: { type: Sequelize.STRING, allowNull: true },
    VC_CSC_REMARKS: { type: Sequelize.STRING, allowNull: true },
    I_HOSPITAL_ID: { type: Sequelize.STRING, allowNull: true },
    REG_YEAR: { type: Sequelize.STRING, allowNull: true },
    TS_MC_APPROVED_DATE: { type: Sequelize.STRING, allowNull: true },
    VC_HASHKEY: { type: Sequelize.STRING, allowNull: true },
    ULB_STATUS: { type: Sequelize.STRING, allowNull: true },
    SI_STATUS: { type: Sequelize.STRING, allowNull: true },
    SI_REMARKS: { type: Sequelize.STRING, allowNull: true },
    MC_STATUS: { type: Sequelize.STRING, allowNull: true },
    I_GENDER_ID: { type: Sequelize.STRING, allowNull: true },
    I_DISTRICT_ID: { type: Sequelize.STRING, allowNull: true },
    I_LOCALITY_ID: { type: Sequelize.STRING, allowNull: true },
    I_RELIGION_ID: { type: Sequelize.STRING, allowNull: true },
    I_OCCUPATION_ID: { type: Sequelize.STRING, allowNull: true },
    I_MEDICAL_ATTENTION_ID: { type: Sequelize.STRING, allowNull: true },
    I_CAUSE_OF_DEATH_ID: { type: Sequelize.STRING, allowNull: true },
    CITIZEN_ENT_ID: { type: Sequelize.STRING, allowNull: true },
    FORM_UPLOAD1: { type: Sequelize.STRING, allowNull: true },
    VC_AFFIDAVIT: { type: Sequelize.STRING, allowNull: true },
    VC_RDO: { type: Sequelize.STRING, allowNull: true },
    FORM_UPLOAD2: { type: Sequelize.STRING, allowNull: true },
    IS_BACKLOG: { type: Sequelize.STRING, allowNull: true },
    REG_NO: { type: Sequelize.STRING, allowNull: true },
    VC_COUNTRY_NAME: { type: Sequelize.STRING, allowNull: true },
    VC_COUNTRY_ADDRESS: { type: Sequelize.STRING, allowNull: true },
    VC_NATIONALITY: { type: Sequelize.STRING, allowNull: true },
    VC_SUPPORTING_DOC: { type: Sequelize.STRING, allowNull: true },
    TS_REG_DATE: { type: Sequelize.STRING, allowNull: true },
    UpdateRecordKey: { type: Sequelize.STRING, allowNull: true },
});
sequelize.sync();
// Exporting User, using this constant
// we can perform CRUD operations on
// 'user' table.
module.exports = SQLQuery;
